// ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const { isAuthenticated } = useAuth();
    const token = Cookies.get("jwt_token");

    if (!token || !isAuthenticated) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return children;
};

export default ProtectedRoute;
