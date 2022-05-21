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
        <>
            <h2>{token}'s My Page</h2>
        </>
    )
}

export default MyPage