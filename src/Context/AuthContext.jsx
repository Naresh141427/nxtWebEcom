
import React, { useContext, useState } from "react";
import Cookies from "js-cookie";



const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get("jwt_token"));

    const logIn = (jwtToken) => {
        Cookies.set("jwt_token", jwtToken, { expires: 30 });
        setIsAuthenticated(true);


    };

    const logOut = () => {
        Cookies.remove("jwt_token");
        setIsAuthenticated(false);


    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
