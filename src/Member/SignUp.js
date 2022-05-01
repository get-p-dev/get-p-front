import React, { useEffect, useState } from 'react'

/**
 * TODO: 해야할 일들
 * * 1. 인증하기 기능 구현하기
 * * 2. 학생 기업에 따라 인증하기 다르게 나오게 하기
 * * 3. 
 * 
*/

function SignUp() {

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState('false')
    const [isCompany, setIsCompany] = useState(true)
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')

    useEffect(e => {
        setIsCompany(true)
    }, [])

    useEffect(e => {

        setValidEmail(false)
    }, [isCompany])

    function validateEmail(email) {
        if (email.includes('@')) {
            const website = email.split('@')[1]
            console.log(website?.includes('.ac.kr'))
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
    }
    function authenticateEmail(email) {
        if (!email.includes('@')) return
        const website = email.split('@')[1]
        console.log(website?.includes('.ac.kr'))
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

    function signUp() {

    }

    return (
        <div className="max-w-4xl mx-auto px-4 mt-12">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="py-10 rounded-md flex flex-col gap-8 max-w-2xl w-full ">
                    <h2 className="w-full text-4xl font-bold px-2">
                        회원가입
                    </h2>
                    <form className="w-full flex flex-col gap-6">
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                기업 & 개인 선택하기
                            </h3>
                            <div className="flex flex-row gap-2">
                                <label htmlFor="company" className={"flex justify-center items-center flex-1 h-28 rounded-2xl py-10 cursor-pointer transition-all ease-in-out duration-500 " + (isCompany ? ' bg-sky-500 text-white' : ' bg-sky-100')}>
                                    <input className="hidden"
                                        type="radio"
                                        id="company"
                                        name="isCompany"
                                        onChange={e => {
                                            setIsCompany(true)
                                        }} />
                                    기업으로 가입하기
                                </label>
                                <label htmlFor="individual" className={"flex justify-center items-center flex-1 h-28 rounded-2xl py-10 cursor-pointer transition-all ease-in-out duration-500 " + (isCompany ? ' bg-sky-100' : ' bg-sky-500 text-white')}>
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
                        </label>
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                이메일
                            </h3>
                            <div className="flex flex-row gap-2">
                                <input className="grow border-2 border-gray-200 rounded-2xl px-6 py-4" type="text" name="id" placeholder="email@website.com" onChange={e => {
                                    setEmail(e.target.value)
                                    validateEmail(e.target.value)
                                }
                                } />
                                <button type="button" className=" flex-0 bg-sky-500 px-8 rounded-2xl text-white" onClick={e => authenticateEmail(email)}>인증하기</button>
                            </div>
                            {validEmail ?
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
                            }
                        </label>
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                아이디
                            </h3>
                            <input className="w-full border-2 border-gray-200  rounded-2xl px-6 py-4 border-" type="text" name="id" placeholder="아이디를 입력하세요" onChange={e => setUserName(e.target.value)} />
                        </label>
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                비밀번호
                            </h3>
                            <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="password" name="password" placeholder="비밀번호를 입력해주세요." onChange={e => setPassword(e.target.value)} />
                        </label>
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                비밀번호 확인
                            </h3>
                            <input className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4" type="password" name="password" placeholder="위에 입력한 비밀번호를 다시 입력해주세요." onChange={e => setCheckPassword(e.target.value)} />
                        </label>
                        <div className="flex flex-row px-4">
                            <label className="flex flex-row items-center gap-4">
                                <input type="checkbox" name="rememeber-me" value="Remember Me"
                                    className="w-6 h-6 accent-sky-600" />
                                <p className="text-gray-600 select-none">

                                    {/* TODO: Modal로 만들기 */}

                                    <span className="font-bold underline text-sky-500">이용 약관</span> 및 <span className="font-bold underline text-sky-500">개인정보수집 처리방침</span>에 동의합니다.

                                </p>
                            </label>
                        </div>
                        <button className="w-full text-white bg-sky-500 hover:bg-sky-600 rounded-2xl py-4 text-lg font-semibold transition-all ease-in-out cursor-pointer" onSubmit={e => signUp()}>
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