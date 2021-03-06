import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import logo from './logo.png'
// import { useCookies } from 'react-cookie';

function Header() {
    const { token, onSignOut } = useAuth()
    // const [cookies, setCookie] = useCookies();

    return (
        < div className="w-full bg-white sticky top-0 z-10" >
            <div className="max-w-4xl mx-auto px-10 pt-3 pb-3">
                <div className="flex flex-row gap-8 items-center justify-center w-full">
                    <Link to="/" className="flex justify-center items-center gap-2 text-3xl font-md pl-2 pr-4 text-gray-900 rounded-2xl bg-white"><img className="w-16 aspect-auto" src={logo} alt="logo" />Get-P</Link>
                    <input
                        className="grow px-2 py-1 border-2 border-gray-800 rounded-md"
                        placeholder='Search items, collections, and accounts'
                    />
                    <div className="grow-0 flex flex-row gap-2">
                        <Link to="/projects" className="underline text-gray-600">Projects</Link>
                        <Link to="/people" className="underline text-gray-600">People</Link>
                        <Link to="/" className="underline text-gray-600">Info</Link>
                    </div>
                    <div className="grow-0 flex flex-row gap-2">
                        {
                            token ?
                                <>
                                    <Link to='/mypage' className="underline text-gray-800">마이페이지</Link>
                                    <button onClick={onSignOut} className="underline text-gray-800">로그아웃</button>
                                </>
                                :
                                <Link to="/signin" className="underline text-gray-800">로그인 / 회원가입</Link>
                        }
                    </div>
                </div>
            </div>
            <div className="w-full h-0.5 bg-gray-200 "></div>
        </div >
    )
}
export default Header