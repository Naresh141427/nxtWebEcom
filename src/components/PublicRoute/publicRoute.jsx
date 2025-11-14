// PublicRoute.jsx
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../../Context/AuthContext";

const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const token = Cookies.get("jwt_token");

    if (token && isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PublicRoute;
