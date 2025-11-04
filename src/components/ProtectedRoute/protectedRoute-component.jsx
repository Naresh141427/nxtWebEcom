import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
    const location = useLocation()
    const isAuthenticated = Cookies.get("jwt_token")

    if (isAuthenticated === undefined) {
        return <Navigate to="/login" replace state={{ from: location.pathname }} />
    } else {
        return children
    }
}

export default ProtectedRoute