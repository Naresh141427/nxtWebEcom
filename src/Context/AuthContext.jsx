
import React, { useContext, useReducer } from "react";
import Cookies from "js-cookie";



const AuthContext = React.createContext(undefined);


const jwtToken = Cookies.get("jwt_token")

const INTIAL_AUTH_STATE = {
    isAuthenticated: !!jwtToken
}

const USER_AUTH_ACTION_TYPES = {
    "AUTHENTICATE_USER": "AUTHENTICATE_USER"
}

const authReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case USER_AUTH_ACTION_TYPES.AUTHENTICATE_USER:
            return {
                ...state,
                isAuthenticated: payload
            }
        default:
            return state
    }

}


export const AuthProvider = ({ children }) => {
    const [{ isAuthenticated }, dispatch] = useReducer(authReducer, INTIAL_AUTH_STATE)

    const logIn = (jwtToken) => {
        Cookies.set("jwt_token", jwtToken, { expires: 30 });
        dispatch({ type: USER_AUTH_ACTION_TYPES.AUTHENTICATE_USER, payload: true })


    };

    const logOut = () => {
        Cookies.remove("jwt_token");
        dispatch({ type: USER_AUTH_ACTION_TYPES.AUTHENTICATE_USER, payload: false })


    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};


// we should add the runtime check within useAuth to ensure developers receive a clear error message 
// if they forget to wrap components in the necessary <AuthProvider>, 
// preventing confusing application crashes.
export const useAuth = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
};
