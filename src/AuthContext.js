import { createContext, useContext } from "react"

const AuthContext = createContext('user')

export function useAuth() {
    return useContext(AuthContext)
}

export default AuthContext
