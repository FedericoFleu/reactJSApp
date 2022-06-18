import { createContext, useContext, useState } from "react"

const mockUsers = [
    {email: "fedefleurent@gmail.com", pass: "Fede1234"},
    {email: "silfleurent@gmail.com", pass: "Sil1234"},
    {email: "jose@gmail.com", pass: "Jose1234"}
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

    console.log(auth)

    const login = (values) => {
        const {email, password} = values

        const match = mockUsers.find((user) => user.email === email)

        if(match) {
            if (match.pass === password){
                setAuth({
                    loggedIn: true,
                    userId: match.email
                })
            } else{
                alert("Password no Incorrecto")
            }
        } else {
            alert("Usuario no Incorrecto")
        }
    }

    const logOut = () =>{
        setAuth({
            loggedIn: false,
            userId: null
        })
    }

    return(
        <AuthContext.Provider value={{auth, login, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}
