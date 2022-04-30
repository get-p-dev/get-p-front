import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'

function Header() {
    return (
        <div className="w-full bg-white sticky top-0 z-10">
            <div className="max-w-4xl mx-auto px-10 pt-3 pb-3">
                <div className="flex flex-row gap-8 items-center justify-center w-full">
                    <Link to="/" className="flex content-center text-3xl font-md px-1 text-gray-900 rounded-2xl bg-white"><img className="w-20 aspect-auto" src={logo} /></Link>
                    <input
                        className="grow px-2 py-1 border-2 border-gray-800 rounded-md"
                        placeholder='Search items, collections, and accounts'
                    />
                    <div className="grow-0 flex flex-row gap-2">
                        <a href="#top" className="underline text-gray-600">Project</a>
                        <a href="#top" className="underline text-gray-600">People</a>
                        <a href="#top" className="underline text-gray-600">Info</a>
                    </div>
                    <div className="grow-0 flex flex-row gap-2">
                        <Link to="/signin" className="underline text-gray-800">로그인</Link>
                        <Link to="/signup" className="underline text-gray-800">회원가입</Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-0.5 bg-gray-200 "></div>
        </div>
    )
}
export default Header