import { Navigate } from "react-router-dom"
import Cookies from "js-cookie"

const PublicRoute = ({ children }) => {
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken !== undefined) {
        return <Navigate to="/" raplace />

    } else {
        return children
    }
}

export default PublicRoute