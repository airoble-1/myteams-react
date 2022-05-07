import { useState, createContext, useEffect } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    // here we check if there is a token in local storage
    const token = localStorage.getItem("AuthToken")
    if (token) return JSON.parse(token)
  })

  useEffect(() => {
    if (authState) {
      localStorage.setItem("AuthToken", JSON.stringify(authState))
    } else localStorage.removeItem("AuthToken")
  }, [authState])

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      {children}
    </AuthContext.Provider>
  )
}
