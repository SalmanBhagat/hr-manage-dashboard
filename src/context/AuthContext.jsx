import { auth } from "@/firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext({user : null})

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    // State Variebles
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Implement Auth
    const myAuthInfo = auth;

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(myAuthInfo, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
        })

        return () => unsuscribe();

    }, [myAuthInfo])

    return(
        <AuthContext.Provider value={{user, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext