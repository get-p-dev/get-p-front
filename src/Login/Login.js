import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 mt-12">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="py-8 px-6 border-2 rounded-md flex flex-col gap-8 max-w-2xl w-full ">
                        <h2 className="w-full text-4xl font-bold px-2">Login</h2>
                        <form className="w-full flex flex-col gap-8">
                            <label>
                                <h3 className="text-xl font-bold px-2 mb-4">Username or Email</h3>
                                <input className="w-full border-2 rounded-full px-6 py-4" type="text" name="id" placeholder="email@website.com" />
                            </label>
                            <label>
                                <h3 className="text-xl font-bold px-2 mb-4">Password</h3>
                                <input className="w-full border-2 rounded-full px-6 py-4" type="password" name="password" placeholder="Password" />
                            </label>
                            <div className="flex flex-row justify-between px-4">
                                <div className="flex flex-row items-center gap-2">
                                    <input type="checkbox" name="rememeber-me" value="Remember Me"
                                        className="w-6 h-6" />
                                    <p>Rememeber Me</p>
                                </div>
                                <Link className="" to="/forgotPassword">Forgot Password?</Link>
                            </div>
                        </form>
                        <input className="w-full bg-gray-300 hover:bg-gray-400 rounded-full py-4 text-xl transition-all ease-in-out" type="submit" name="submit" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login