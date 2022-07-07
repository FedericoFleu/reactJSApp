import { createContext, useContext, useState } from "react"

const mockUsers = [
    {email: "fedef@gmail.com", pass: "Fede1234"},
    {email: "silf@gmail.com", pass: "Sil1234"},
    {email: "josef@gmail.com", pass: "Jose1234"}
]

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ( {children} ) =>{

    const [auth, setAuth] = useState({
        loggedIn: false,
        userId: null
    })

    const [error, setError] = useState([])

    const login = (values) => {
        const {email, password} = values
        
        setError({})

        const match = mockUsers.find((user) => user.email === email)

        if(match) {
            if (match.pass === password){
                setAuth({
                    loggedIn: true,
                    userId: match.email
                })
            } else{
                setError({
                    password: "Password incorrecto"
                })
            }
        } else {
            setError({
                email: "Usuario no encontrado"
            })
        }
    }

    const logOut = () =>{
        setAuth({
            loggedIn: false,
            userId: null
        })
    }

    return(
        <AuthContext.Provider value={{auth, error, login, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}
