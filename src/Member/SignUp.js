import React, { useEffect, useState } from 'react'
import useDeepCompareEffect from "use-deep-compare-effect"
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
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [agreed, setAgreed] = useState(false)

    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState({
        safe: false,
        check: false
    })

    useEffect((e) => {
        setValidEmail(false)
    }, [isCompany])

    // * check password
    useDeepCompareEffect((e) => {
        if (password === confirmPassword) {
            setValidPassword({ ...validPassword, check: true })
        } else {
            setValidPassword({ ...validPassword, check: false })
        }
    }, [confirmPassword, password, validPassword])


    // * validate password if it is safe or not
    useDeepCompareEffect((e) => {
        const passReg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

        if (!passReg.test(password)) {
            setValidPassword({ ...validPassword, safe: false })
            return
        }
        setValidPassword({ ...validPassword, safe: true })
    }, [validPassword, password])

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
        const send_param = {
            username: username,
            email: email,
            password: password,
            agreed: agreed
        }

        console.log(send_param)

        axios.post("http://localhost:11854/api/users/signup", send_param).then(returnData => {
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

    function validateEmail() {
        return
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
                        <div>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                기업 & 개인 선택하기
                            </h3>
                            <div className="flex flex-row gap-2">
                                <label htmlFor="company" className={"flex justify-center items-center flex-1 h-28 rounded-2xl py-10 cursor-pointer font-bold transition-all ease-in-out duration-500 " + (isCompany ? ' bg-sky-500 text-white' : ' border-2 border-gray-200')}>
                                    <input className="hidden"
                                        type="radio"
                                        id="company"
                                        name="isCompany"
                                        onChange={e => {
                                            setIsCompany(true)
                                        }} />
                                    기업으로 가입하기
                                </label>
                                <label htmlFor="individual" className={"flex justify-center items-center flex-1 h-28 rounded-2xl py-10 cursor-pointer font-bold transition-all ease-in-out duration-500 " + (isCompany ? ' border-2 border-gray-200' : ' bg-sky-500 text-white')}>
                                    <input className="hidden"
                                        type="radio"
                                        id="individual"
                                        name="isCompany"
                                        onChange={e => {
                                            setIsCompany(false)
                                        }}
                                    />
                                    개인으로 가입하기
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
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                이름<span className="text-red-500">*</span>
                            </h3>
                            <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="text" name="name" placeholder="이름을 입력해주세요." onChange={e => setUsername(e.target.value)} />
                        </label>
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                비밀번호<span className="text-red-500">*</span>
                            </h3>
                            <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="password" name="password" placeholder="비밀번호를 입력해주세요." onChange={e => {
                                setPassword(e.target.value)
                            }} />
                            {(password.length > 0) &&
                                (
                                    (validPassword.safe) ?
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
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                비밀번호 확인<span className="text-red-500">*</span>
                            </h3>
                            <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="password" name="password" placeholder="위에 입력한 비밀번호를 다시 입력해주세요." onChange={e => {
                                setConfirmPassword(e.target.value)
                            }} />
                            {(confirmPassword.length > 0) &&
                                (
                                    validPassword.check ?
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
                        <div className="flex flex-row px-4">
                            <label className="flex flex-row items-center gap-4">
                                <input type="checkbox" name="rememeber-me" value="Remember Me" onChange={() => setAgreed(!agreed)}
                                    className="w-6 h-6 accent-sky-600" />
                                <p className="text-gray-600 select-none">

                                    {/* TODO: Modal로 만들기 */}

                                    <span className="font-bold underline text-sky-500">이용 약관</span> 및 <span className="font-bold underline text-sky-500">개인정보수집 처리방침</span>에 동의합니다.
                                </p>
                            </label>
                        </div>
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
                    </form>
                </div>
            </div >
        </div >
    )
}

export default SignUp