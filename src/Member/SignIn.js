import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    return (
        <div className="max-w-4xl mx-auto px-4 mt-12">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="py-10 rounded-md flex flex-col gap-8 max-w-2xl w-full ">
                    <h2 className="w-full text-4xl font-bold px-2">
                        로그인
                    </h2>
                    <div className="w-full h-auto flex flex-row px-2 justify-between items-center">
                        <div className="h-auto">
                            <h3 className="text-2xl font-bold mb-2">
                                회원이 아니시다면
                            </h3>
                            <p>20초도 안 걸리는 회원가입 하러가기</p>
                        </div>
                        <div className="font-bold bg-sky-500 rounded-xl flex px-10 py-5 text-2xl h-full w-52 text-white justify-center items-center">
                            <Link to="/signup">회원가입</Link>
                        </div>
                    </div>
                    <div className="w-full h-1 bg-gray-200 "></div>
                    <form className="w-full flex flex-col gap-6">
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                아이디 또는 이메일
                            </h3>
                            <input className="w-full border-2 border-gray-400 rounded-2xl px-6 py-4 border-" type="text" name="id" placeholder="email@website.com" onChange={e => setUserName(e.target.value)} />
                        </label>
                        <label>
                            <h3 className="text-xl font-bold px-2 mb-2">
                                비밀번호
                            </h3>
                            <input className="w-full border-2 border-gray-400 rounded-2xl px-6 py-4" type="password" name="password" placeholder="비밀번호를 입력하세요." onChange={e => e.target.value} />
                        </label>
                        <div className="flex flex-row justify-between px-4 items-center">
                            <label className="flex flex-row items-center gap-4">
                                <input type="checkbox" name="rememeber-me" value="Remember Me"
                                    className="w-6 h-6 accent-sky-600" />
                                <p className="text-gray-600 select-none">
                                    로그인 상태 유지하기
                                </p>
                            </label>

                            <Link className="flex gap-2 items-center" to="/forgotPassword">
                                비밀번호를 잊어버리셨나요? <span className="text-sky-500 text-lg font-bold">비밀번호 찾기</span>
                            </Link>
                        </div>
                        <button className="w-full text-white bg-sky-500 hover:bg-sky-600 rounded-2xl py-4 text-lg font-semibold transition-all ease-in-out cursor-pointer" type="submit" name="submit">로그인</button>
                    </form>
                    <div>
                        <button className="w-full bg-yellow-400 hover:bg-yellow-500 rounded-2xl font-semibold py-4 text-lg transition-all ease-in-out">
                            <span className="font-bold">카카오톡</span>으로 로그인하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn