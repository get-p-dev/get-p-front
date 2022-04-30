import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="w-full bg-gray-200">
            <div className="max-w-6xl mx-auto px-10 pt-6 pb-6">
                <div className="flex flex-row gap-8 items-center justify-center w-full">
                    <Link to="/" className="flex content-center text-3xl font-md">GET-P</Link>
                    <input
                        className="grow px-2 py-1 border-2 border-stone-500 rounded-md"
                        placeholder='Search items, collections, and accounts'
                    />
                    <div className="grow-0 flex flex-row gap-2">
                        <a href="#top" className="underline text-gray-600">Project</a>
                        <a href="#top" className="underline text-gray-600">People</a>
                        <a href="#top" className="underline text-gray-600">Info</a>
                    </div>
                    <div className="grow-0 flex flex-row gap-2">
                        <Link to="/login" className="underline">Log In</Link>
                        <Link to="/signup" className="underline">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header