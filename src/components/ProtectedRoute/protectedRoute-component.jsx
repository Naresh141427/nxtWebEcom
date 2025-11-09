import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../../Context/AuthContext.jsx"


const ProtectedRoute = ({ children }) => {
    const location = useLocation()
    const { isAuthenticated } = useAuth()

    if (isAuthenticated === undefined) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />
    } else {
        return children
    }
}

export default ProtectedRoute