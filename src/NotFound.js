import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

function NotFound() {
    return (
        <div className="max-w-6xl mx-auto px-4 pt-10 bg-white h-[50vh]">
            <div className="flex h-full flex-col pt-4 px-2 justify-center items-center">
                <img className="w-40 aspect-auto mb-10" src={logo} alt='get-p logo'></img>
                <h2 className="text-4xl font-bold mb-4 font-mono">
                    404 Not Found
                </h2>
                <h3 className="text-xl mb-4 font-bold font-mono">What you were looking for does not exist.</h3>
                <p>You may mistyped the address or the page may have moved. <Link to="/" className="text-sky-500 hover:text-sky-700 cursor-pointer underline">Go back to Home</Link></p>
            </div>
        </div>
    )
}

export default NotFound