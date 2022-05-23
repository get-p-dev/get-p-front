import React, { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * TODO: 해야할 일들
 * * 1. 인증하기 기능 구현하기
 * * 2. 학생 기업에 따라 인증하기 다르게 나오게 하기
 * * 3. 
 * 
*/

function SignUp() {
    const [isCompany, setIsCompany] = useState(true)


    /*
    * Company Field

    * companyName,
    * companyImage,
    * industry,
    * representativeDirector,
    * discription,
    * phoneNumber,
    * url,
    * address,
    * email,
    * password
     */

    // * Common Field
    const [image, setImage] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [agreed, setAgreed] = useState(false)

    // * Company Field
    const [industry, setIndustry] = useState('')
    const [representativeDirector, setRepresentativeDirector] = useState('')
    const [description, setDescription] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [url, setUrl] = useState('')
    const [address, setAddress] = useState('')


    const [validEmail, setValidEmail] = useState(false)
    const [isSafe, setIsSafe] = useState(false)
    const [isSame, setIsSame] = useState(false)

    useEffect((e) => {
        setValidEmail(false)
    }, [isCompany])

    // * check password
    useEffect((e) => {
        if (password === confirmPassword) {
            setIsSame(true)
        } else {
            setIsSame(false)
        }
    }, [confirmPassword, password, isSame])


    // * validate password if it is safe or not
    useEffect((e) => {
        const passReg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

        if (!passReg.test(password)) {
            setIsSafe(false)
            return
        }
        setIsSafe(true)
    }, [isSafe, password])

    // * check email
    useEffect(e => {
        if (email.includes('@')) {
            const website = email.split('@')[1]
            if (!isCompany) {
                if (website?.includes('.ac.kr') || website?.includes('.edu')) {
                    setValidEmail(true)
                    return
                }
            } else {
                if (website?.includes('.com')) {
                    setValidEmail(true)
                    return
                }
            }
        }
        setValidEmail(false)
        return
    }, [email, isCompany])

    function handleSignup() {
        if (!agreed) {
            return
        }

        let send_param

        if (isCompany) {
            send_param = {
                companyName: username,
                // companyImage: image,
                industry: industry,
                representativeDirector: representativeDirector,
                discription: description,
                phoneNumber: phoneNumber,
                url: url,
                address: address,
                email: email,
                password: password
            }
        } else {
            send_param = {
                // 일반인 파라미터
            }
        }

        console.log(send_param)

        axios.post("http://localhost:8080/api/company/signup", send_param).then(returnData => {
            const { message, result } = returnData.data;
            console.log(returnData)
            if (result) {
                alert(message)
                window.location.href = "/signin"
                // 로그인 성공시 해야할 것들
            } else {
                alert(message)
            }
        })
    }

    function authenticateEmail(email) {
        if (!email.includes('@')) return
        const website = email.split('@')[1]
        if (!isCompany) {
            if (website?.includes('.ac.kr') || website?.includes('.edu')) {
                setValidEmail(true)
                return
            }
        } else {
            if (website?.includes('.com'))
                setValidEmail(true)
            return
        }
    }

    function encodeFileToBase64(fileBlob) {
        const reader = new FileReader()
        reader.readAsDataURL(fileBlob)
        return new Promise((resolve) => {
            reader.onload = () => {
                setImage(reader.result)
                resolve()
            }
        })
    }

    return (
        <div className="max-w-4xl mx-auto px-4 mt-12">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="py-10 rounded-md flex flex-col gap-8 max-w-2xl w-full ">
                    <h2 className="w-full text-4xl font-bold px-2">
                        회원가입
                    </h2>
                    <form className="w-full flex flex-col gap-6" onSubmit={(e) => {
                        e.preventDefault()
                        handleSignup()
                    }}>
                        <Radio isCompany={isCompany} setIsCompany={setIsCompany} />

                        {
                            isCompany ?
                                <>
                                    <label>
                                        <h3 className="text-xl font-bold px-2 mb-2">
                                            이메일<span className="text-red-500">*</span>
                                        </h3>
                                        <div className="flex flex-row gap-2">
                                            <input className="grow border-2 border-gray-200 rounded-2xl px-6 py-4" type="text" name="id" placeholder="email@website.com" onChange={e => {
                                                setEmail(e.target.value)

                                            }
                                            } />
                                            <button type="button" className=" flex-0 bg-sky-500 px-8 rounded-2xl text-white" onClick={e => authenticateEmail(email)}>인증하기</button>
                                        </div>
                                        {(email.length > 0) &&
                                            (
                                                validEmail ?
                                                    <div>
                                                        <p className='px-2 mt-2 text-green-500'>
                                                            알맞은 이메일입니다.
                                                        </p>
                                                    </div>
                                                    :
                                                    <div>
                                                        <p className='px-2 mt-2 text-red-500'>
                                                            * 회사 소유의 알맞은 이메일을 입력해주세요.
                                                        </p>
                                                    </div>
                                            )
                                        }
                                    </label>
                                    {/* 비밀번호 */}
                                    <label>
                                        <h3 className="text-xl font-bold px-2 mb-2">
                                            비밀번호<span className="text-red-500">*</span>
                                        </h3>
                                        <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="password" name="password" placeholder="비밀번호를 입력해주세요." onChange={e => {
                                            setPassword(e.target.value)
                                        }} />
                                        {(password.length > 0) &&
                                            (
                                                (isSafe) ?
                                                    <div>
                                                        <p className='px-2 mt-2 text-green-500'>
                                                            안전한 비밀번호입니다.
                                                        </p>
                                                    </div>
                                                    :
                                                    <div>
                                                        <p className='px-2 mt-2 text-red-500'>
                                                            *안전하지 않은 비밀번호입니다.
                                                        </p>
                                                    </div>
                                            )
                                        }
                                    </label>

                                    {/* 비밀번호 확인 */}
                                    <label>
                                        <h3 className="text-xl font-bold px-2 mb-2">
                                            비밀번호 확인<span className="text-red-500">*</span>
                                        </h3>
                                        <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="password" name="password" placeholder="위에 입력한 비밀번호를 다시 입력해주세요." onChange={e => {
                                            setConfirmPassword(e.target.value)
                                        }} />
                                        {(confirmPassword.length > 0) &&
                                            (
                                                isSame ?
                                                    <div>
                                                        <p className='px-2 mt-2 text-green-500'>
                                                            알맞은 비밀번호입니다.
                                                        </p>
                                                    </div>
                                                    :
                                                    <div>
                                                        <p className='px-2 mt-2 text-red-500'>
                                                            *위에 입력한 비밀번호를 다시 입력해주세요.
                                                        </p>
                                                    </div>
                                            )
                                        }
                                    </label>

                                    {/* 기업명 */}
                                    <label>
                                        <h3 className="text-xl font-bold px-2 mb-2">
                                            기업명<span className="text-red-500">*</span>
                                        </h3>
                                        <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="text" name="name" placeholder="기업명을 입력해주세요." onChange={e => setUsername(e.target.value)} />
                                    </label>

                                    {/* 기업 프로필 */}
                                    <label>
                                        <h3 className="text-xl font-bold px-2 mb-2">
                                            기업 프로필<span className="text-red-500">*</span>
                                        </h3>
                                        <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="file" name="profile_img" accept="image/jpg,image/png,image/jpeg,image/gif" placeholder="기업명을 입력해주세요." onChange={e => encodeFileToBase64(e.target.files[0])} />
                                        {image && <img className="h-72 mx-auto" src={image} alt="preview-img" />}
                                    </label>

                                    {/* 업종 - 이건 셀렉트 하게 하는 것도 좋을 듯 */}
                                    <label>
                                        <h3 className="text-xl font-bold px-2 mb-2">
                                            업종<span className="text-red-500">*</span>
                                        </h3>
                                        <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="text" name="name" placeholder="업종을 입력해주세요." onChange={e => setIndustry(e.target.value)} />
                                    </label>

                                    {/* 대표자명 */}
                                    <label>
                                        <h3 className="text-xl font-bold px-2 mb-2">
                                            대표자명<span className="text-red-500">*</span>
                                        </h3>
                                        <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="text" name="name" placeholder="대표자명을 입력해주세요." onChange={e => setRepresentativeDirector(e.target.value)} />
                                    </label>

                                    {/* 업체 간략 소개 */}
                                    <label>
                                        <h3 className="text-xl font-bold px-2 mb-2">
                                            업체 간략 소개<span className="text-red-500">*</span>
                                        </h3>
                                        <textarea className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 h-28" type="textarea" name="name" placeholder="기업을 간략하게 소개해주세요." onChange={e => setDescription(e.target.value)} />
                                    </label>

                                    {/* 대표전화 */}
                                    <label>
                                        <h3 className="text-xl font-bold px-2 mb-2">
                                            대표 전화<span className="text-red-500">*</span>
                                        </h3>
                                        <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="text" name="name" placeholder="기업의 전화 번호를 입력해주세요." onChange={e => setPhoneNumber(e.target.value)} />
                                    </label>

                                    {/* 웹사이트/홈페이지 */}
                                    <label>
                                        <h3 className="text-xl font-bold px-2 mb-2">
                                            웹사이트/홈페이지<span className="text-red-500">*</span>
                                        </h3>
                                        <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="text" name="name" placeholder="기업의 웹사이트/홈페이지를 입력해주세요." onChange={e => setUrl(e.target.value)} />
                                    </label>

                                    {/* 기업 주소 */}
                                    <label>
                                        <h3 className="text-xl font-bold px-2 mb-2">
                                            기업 주소<span className="text-red-500">*</span>
                                        </h3>
                                        <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="text" name="name" placeholder="기업의 웹사이트/주소를 입력해주세요." onChange={e => setAddress(e.target.value)} />
                                    </label>
                                </>
                                :
                                <>
                                    <EmailForm email={email} validEmail={validEmail} setEmail={setEmail} authenticateEmail={authenticateEmail} isCompany={isCompany} />

                                    <NameForm setUsername={setUsername} />

                                    <PasswordForm password={password} setPassword={setPassword} isSafe={isSafe} />

                                    <ConfirmPasswordForm confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} isSame={isSame} />
                                </>
                        }

                        <TermsNConditions agreed={agreed} setAgreed={setAgreed} />

                        <SignUpButton isCompany={isCompany} />
                    </form>
                </div>
            </div >
        </div >
    )
}

function Radio({ isCompany, setIsCompany }) {
    return (
        <div>
            <h3 className="text-xl font-bold px-2 mb-2">
                기업 & 개인 선택하기
            </h3>
            <div className="flex flex-row gap-2">
                <label htmlFor="company" className={"flex flex-col justify-center items-center flex-1 rounded-2xl h-40 cursor-pointer font-bold transition-all ease-in-out duration-500 " + (isCompany ? ' bg-sky-500 text-white' : ' border-2 border-gray-200')}>
                    <input className="hidden"
                        type="radio"
                        id="company"
                        name="isCompany"
                        onChange={e => {
                            setIsCompany(true)
                        }} />
                    <p className="text-xl mb-2">Project</p>
                    <p>1인 창조 기업</p>
                    <p>기업</p>
                </label>
                <label htmlFor="individual" className={"flex flex-col justify-center items-center flex-1 rounded-2xl h-40 cursor-pointer font-bold transition-all ease-in-out duration-500 " + (isCompany ? ' border-2 border-gray-200' : ' bg-sky-500 text-white')}>
                    <input className="hidden"
                        type="radio"
                        id="individual"
                        name="isCompany"
                        onChange={e => {
                            setIsCompany(false)
                        }}
                    />
                    <p className="text-xl mb-2">People</p>
                    <p>대학생</p>
                    <p>개인</p>
                </label>
            </div>
            <p className="px-2 mt-2 text-red-500">
                {isCompany ?
                    '*기업을 선택하셨습니다.'
                    :
                    '*개인을 선택하셨습니다.'
                }
            </p>
        </div>
    )
}

function EmailForm({ email, validEmail, setEmail, authenticateEmail, isCompany }) {
    return (
        <label>
            <h3 className="text-xl font-bold px-2 mb-2">
                이메일<span className="text-red-500">*</span>
            </h3>
            <div className="flex flex-row gap-2">
                <input className="grow border-2 border-gray-200 rounded-2xl px-6 py-4" type="text" name="id" placeholder="email@website.com" onChange={e => {
                    setEmail(e.target.value)

                }
                } />
                <button type="button" className=" flex-0 bg-sky-500 px-8 rounded-2xl text-white" onClick={e => authenticateEmail(email)}>인증하기</button>
            </div>
            {(email.length > 0) &&
                (
                    validEmail ?
                        <div>
                            <p className='px-2 mt-2 text-green-500'>
                                알맞은 이메일입니다.
                            </p>
                        </div>
                        :
                        <div>
                            <p className='px-2 mt-2 text-red-500'>
                                {isCompany ?
                                    "* 알맞은 이메일을 입력해주세요."
                                    :
                                    "*.ac.kr 또는 .edu로 끝나는 이메일을 입력해주세요."
                                }

                            </p>
                        </div>
                )
            }
        </label>
    )
}

function NameForm({ setUsername }) {
    return (
        <label>
            <h3 className="text-xl font-bold px-2 mb-2">
                이름<span className="text-red-500">*</span>
            </h3>
            <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="text" name="name" placeholder="이름을 입력해주세요." onChange={e => setUsername(e.target.value)} />
        </label>
    )
}

function PasswordForm({ password, setPassword, isSafe }) {
    return (
        <label>
            <h3 className="text-xl font-bold px-2 mb-2">
                비밀번호<span className="text-red-500">*</span>
            </h3>
            <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="password" name="password" placeholder="비밀번호를 입력해주세요." onChange={e => {
                setPassword(e.target.value)
            }} />
            {(password.length > 0) &&
                (
                    (isSafe) ?
                        <div>
                            <p className='px-2 mt-2 text-green-500'>
                                안전한 비밀번호입니다.
                            </p>
                        </div>
                        :
                        <div>
                            <p className='px-2 mt-2 text-red-500'>
                                *안전하지 않은 비밀번호입니다.
                            </p>
                        </div>
                )
            }
        </label>
    )
}

function ConfirmPasswordForm({ confirmPassword, setConfirmPassword, isSame }) {
    return (
        <label>
            <h3 className="text-xl font-bold px-2 mb-2">
                비밀번호 확인<span className="text-red-500">*</span>
            </h3>
            <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="password" name="password" placeholder="위에 입력한 비밀번호를 다시 입력해주세요." onChange={e => {
                setConfirmPassword(e.target.value)
            }} />
            {(confirmPassword.length > 0) &&
                (
                    isSame ?
                        <div>
                            <p className='px-2 mt-2 text-green-500'>
                                알맞은 비밀번호입니다.
                            </p>
                        </div>
                        :
                        <div>
                            <p className='px-2 mt-2 text-red-500'>
                                *위에 입력한 비밀번호를 다시 입력해주세요.
                            </p>
                        </div>
                )
            }
        </label>
    )
}

function TermsNConditions({ agreed, setAgreed }) {
    return (
        <div className="flex flex-row pl-4 items-center gap-4">
            <label className="flex">
                <input type="checkbox" name="rememeber-me" value="Remember Me" onChange={() => setAgreed(!agreed)}
                    className="w-6 h-6 accent-sky-600" checked={agreed} />
            </label>
            <p className="text-gray-600 select-none">

                {/* TODO: Modal로 만들기 */}

                <button onClick={(e) => {
                    e.preventDefault()

                }} className="font-bold underline text-sky-500">이용 약관</button> 및 <button onClick={(e) => {
                    e.preventDefault()
                }} className="font-bold underline text-sky-500">개인정보수집 처리방침</button>에 동의합니다.
            </p>
        </div >
    )
}

function SignUpButton({ isCompany }) {
    return (
        <button className="
                            w-full rounded-2xl py-4 
                            bg-sky-500 hover:bg-sky-600 
                            text-white text-lg font-semibold 
                            transition-all ease-in-out cursor-pointer">
            {isCompany ?
                '기업으로 '
                :
                '개인으로 '
            }
            가입하기</button>
    )
}

export default SignUp