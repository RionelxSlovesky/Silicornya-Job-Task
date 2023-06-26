import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem("userInfo")
        if(user) {
            const userParsed = JSON.parse(user)
            setUserInfo(userParsed)
        }
    }, [])

    const authInfo = {
        userInfo,
        setUserInfo
    }

    return (
        <>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </>
    );
};

export default AuthProvider;