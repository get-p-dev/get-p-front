import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext';


function MyPage() {
    const { token } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (token == null) navigate('/signin')
    }, [navigate, token])

    return (
        <div className="max-w-4xl mx-auto px-4 pt-10">
            <div className="flex w-full justify-end pt-4 px-2">
                <h2 className="grow text-4xl font-bold">My Page</h2>
            </div>
        </div>
    )
}

export default MyPage