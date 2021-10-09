import React, { useCallback } from 'react';
import AuthContext from "./AuthContext";
import axiosClient from '../../config/axios';

export default function AuthProvider({ children }) {

    const handleLogin = useCallback(async (email, password) =>{

        await axiosClient.post('/api/login',
        {
            email, password
        }
        ).then((response) => {

            localStorage.setItem("isAuth", "true");
            localStorage.setItem("user", JSON.stringify({
            email,
            }));

            if (response.status === 200){
                localStorage.setItem("idRol", response.data.idRol);
                
            } else if (response.status === 400) {
                alert("Malooo");
            }
        })
            .catch((error) => {
            console.log(error);
        });
    }, []);

    
    return (
        <AuthContext.Provider value={{
            onLogin: handleLogin,
            isAuthenticated: localStorage.getItem("isAuth")?.length > 0,
            userRol: window.localStorage.getItem("idRol"),
        }}>
            {children}
        </AuthContext.Provider>
    );
}