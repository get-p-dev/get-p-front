import React, { useEffect, useState } from 'react'
import {
    Routes,
    Route,
    useNavigate,
    Navigate,
    useLocation
} from 'react-router-dom'

import Home from './Home/Home'
import SignIn from './Member/SignIn'
import SignUp from './Member/SignUp'
import MyPage from './Member/MyPage'
import Header from './Header'
import Footer from './Footer'
import NotFound from './NotFound'
import AuthContext, { useAuth } from './AuthContext'
import Projects from './Projects'
import People from './People'

function App() {
    // * test ID: test1@naver.com
    // * test PW: 2dogs@house

    function AuthProvider({ children }) {
        const [token, setToken] = useState(() => getLocalStorage("token", null))
        const navigate = useNavigate()
        const location = useLocation()

        useEffect(() => {
            setLocalStorage('token', token)
        }, [token])

        function setLocalStorage(key, value) {
            try {
                window.localStorage.setItem(key, JSON.stringify(value))
            } catch (e) {
                alert(e)
            }
        }

        function getLocalStorage(key, initialValue) {
            try {
                const value = window.localStorage.getItem(key);
                return value ? JSON.parse(value) : initialValue;
            } catch (e) {
                // if error, return initial value
                return initialValue;
            }
        }

        async function handleSignIn() {
            const token = await fakeAuth()
            setToken(token)

            const origin = location.state?.from?.pathname || '/mypage'

            navigate(origin)
        }

        function handleSignOut() {
            setToken(null)
            try {
                window.localStorage.removeItem('token')
            } catch (e) {
                alert(e)
            }
            navigate('/')
        }

        const value = {
            token,
            onSignIn: handleSignIn,
            onSignOut: handleSignOut,
        }

        return (
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        )
    }

    function fakeAuth() {
        return new Promise((resolve) => {
            setTimeout(() => resolve('2342f2f1d131rf12'), 250)
        })
    }

    function ProtectedRoute({ children }) {
        const token = useAuth()
        const location = useLocation()

        if (token == null) {
            return <Navigate to="/signin" replace state={{ from: location }} />
        }

        return children
    }

    return (
        <AuthProvider>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="mypage"
                    element={
                        <ProtectedRoute>
                            <MyPage />
                        </ProtectedRoute>
                    }
                />
                <Route path="projects" element={<Projects />} />
                <Route path="people" element={<People />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </AuthProvider >
    )
}

export default App