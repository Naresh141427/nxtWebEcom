
import { useNavigate } from "react-router-dom";
import { NotFoundContainer, NotFoundImage, NotFoundDescitption, HomeButton } from "./notFound-styles";

const NotFound = () => {
    const navigate = useNavigate()
    const handleButton = () => navigate("/", { replace: true })
    return (
        <NotFoundContainer>
            <NotFoundImage
                src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
                alt="not found"
            />
            <NotFoundDescitption>The Requested Page Not Found</NotFoundDescitption>
            <HomeButton type="button" onClick={handleButton}>Go To Home</HomeButton>
        </NotFoundContainer>
    );
}
export default NotFound;