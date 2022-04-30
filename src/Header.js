import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="w-full bg-gray-200 sticky top-0 z-10">
            <div className="max-w-4xl mx-auto px-10 pt-6 pb-6">
                <div className="flex flex-row gap-8 items-center justify-center w-full">
                    <Link to="/" className="flex content-center text-3xl font-md text-gray-900">GET-P</Link>
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
                        <Link to="/signin" className="underline">로그인</Link>
                        <Link to="/signup" className="underline">회원가입</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header