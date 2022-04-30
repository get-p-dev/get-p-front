import React, { useEffect, useState } from 'react'

/**
 * TODO:
 * 
 * 1. 인증하기 기능 구현하기
 * 2. 학생 기업에 따라 인증하기 다르게 나오게 하기
 * 3. 
 * 
*/

function SignUp() {

    const [email, setEmail] = useState('')
    const [isCompany, setIsCompany] = useState(false)
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')

    useEffect(e => {
        setIsCompany(false)
    }, [])

    function authenticateEmail(email) {

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
                                {
                                    isCompany ?
                                        (
                                            <>
                                                <label htmlFor="company" className="flex justify-center grow rounded-2xl px-6 py-4 bg-gray-500 text-white">
                                                    기업으로 가입하기
                                                    <input className="bg-gray-500"
                                                        type="radio"
                                                        id="company"
                                                        name="isCompany"
                                                        onChange={e => {
                                                            setIsCompany(true)
                                                        }}
                                                    />
                                                </label>
                                                <label htmlFor="individual" className="flex justify-center bg-gray-300 grow rounded-2xl px-6 py-4">
                                                    개인으로 가입하기
                                                    <input className=""
                                                        type="radio"
                                                        id="individual"
                                                        name="isCompany"
                                                        onChange={e => {
                                                            setIsCompany(false)
                                                        }}
                                                    />
                                                </label>
                                            </>
                                        ) :
                                        (
                                            <>
                                                <label htmlFor="company" className="flex justify-center grow rounded-2xl px-6 py-4 bg-gray-300">
                                                    기업으로 가입하기
                                                    <input className=""
                                                        type="radio"
                                                        id="company"
                                                        name="isCompany"
                                                        onChange={e => {
                                                            setIsCompany(true)
                                                        }}
                                                    />
                                                </label>
                                                <label htmlFor="individual" className="flex justify-center grow rounded-2xl px-6 py-4 bg-gray-500 text-white">
                                                    개인으로 가입하기
                                                    <input className=""
                                                        type="radio"
                                                        id="individual"
                                                        name="isCompany"
                                                        onChange={e => {
                                                            setIsCompany(false)
                                                        }}
                                                    />
                                                </label>
                                            </>
                                        )
                                }
                            </div>
                        </label>
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                이메일
                            </h3>
                            <div className="flex flex-row gap-2">
                                <input className="grow border-2 rounded-2xl px-6 py-4 border-" type="text" name="id" placeholder="email@website.com" onChange={e => setEmail(e.target.value)} />
                                <button type="button" className=" flex-0 bg-gray-500 px-8 rounded-2xl text-white" onClick={e => authenticateEmail(email)}>인증하기</button>
                            </div>
                        </label>
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                아이디
                            </h3>
                            <input className="w-full border-2 rounded-2xl px-6 py-4 border-" type="text" name="id" placeholder="아이디를 입력하세요" onChange={e => setUserName(e.target.value)} />
                        </label>
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                비밀번호
                            </h3>
                            <input className="w-full border-2 rounded-2xl px-6 py-4" type="password" name="password" placeholder="비밀번호를 입력해주세요." onChange={e => setPassword(e.target.value)} />
                        </label>
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                비밀번호 확인
                            </h3>
                            <input className="w-full border-2 rounded-2xl px-6 py-4" type="password" name="password" placeholder="위에 입력한 비밀번호를 다시 입력해주세요." onChange={e => setCheckPassword(e.target.value)} />
                        </label>
                        <button className="w-full text-white bg-gray-500 hover:bg-gray-600 rounded-2xl py-4 text-lg font-semibold transition-all ease-in-out cursor-pointer" onSubmit={e => signUp()}>로그인</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default SignUp