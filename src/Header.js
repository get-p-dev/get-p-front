import React from 'react';

function Header() {
    return (
        <div className="max-w-6xl mx-auto px-10 mt-6">
            <div className="flex flex-row gap-8 items-center justify-center w-full">
                <a href="#top" className="flex content-center text-3xl font-extrabold">GET-P</a>
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
                    <a href="#top" className="underline">My Page</a>
                    <a href="#top" className="underline">Log Out</a>
                </div>
            </div>
        </div>
    )
}
export default Header