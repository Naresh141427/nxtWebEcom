import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

import {
    LoginContainer,
    LoginDetailsSection,
    LogInLogoImageContainer,
    LogInLogoImage,
    LoginImage,
    LoginFormContainer,
    LoginFormInputContainer,
    LoginFormLabel,
    LoginFormInput,
    LoginButton,
    ErrorMessage,
    SuccessMessage,
    LoginComponentContainer
} from "./login-styles";

const Login = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [sucessMessage, setSuccessMessage] = useState("")

    const [logoImageLoaded, setLogoImageLoaded] = useState(false);
    const [loginImageLoaded, setLoginImageLoaded] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state?.from || "/"



    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleForm = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setLoading(true);

        const url = "https://apis.ccbp.in/login";
        const options = {
            method: "POST",
            body: JSON.stringify(formData),
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();

            if (response.ok) {
                const { jwt_token: jwtToken } = data
                setSuccessMessage("Login successful! Redirecting...");
                Cookies.set("jwt_token", jwtToken, { expires: 30 })
                navigate(redirectPath, { replace: true })
            } else {
                setErrorMessage(data.error_msg);
            }
        } catch (e) {
            console.error(e.message)
            setErrorMessage("Network error. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginComponentContainer>
            <LoginContainer>
                <LoginDetailsSection>
                    <LogInLogoImageContainer>
                        <LogInLogoImage
                            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                            alt="website logo"
                            loading="lazy"
                            width="144px"
                            height="33px"
                            className={logoImageLoaded ? "loaded" : ""}
                            onLoad={() => setLogoImageLoaded(true)}
                        />
                    </LogInLogoImageContainer>
                    <LoginImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                        alt="website login"
                        loading="lazy"
                        width="256px"
                        height="144px"
                        className={loginImageLoaded ? "loaded" : ""}
                        onLoad={() => setLoginImageLoaded(true)}
                    />
                </LoginDetailsSection>
                <LoginFormContainer onSubmit={handleForm}>
                    <LoginFormInputContainer>
                        <LoginFormLabel htmlFor="username">USERNAME</LoginFormLabel>
                        <LoginFormInput
                            id="username"
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={handleInputChange}
                            value={formData.username}
                            required
                        />
                    </LoginFormInputContainer>
                    <LoginFormInputContainer>
                        <LoginFormLabel htmlFor="password">PASSWORD</LoginFormLabel>
                        <LoginFormInput
                            id="password"
                            type="password"
                            placeholder="Enter Your Password"
                            onChange={handleInputChange}
                            value={formData.password}
                            required
                        />
                    </LoginFormInputContainer>
                    <LoginButton type="submit" disabled={loading}>
                        {loading ? "Loading..." : "Login"}
                    </LoginButton>
                    {errorMessage && <ErrorMessage>*{errorMessage}</ErrorMessage>}
                    {sucessMessage && <SuccessMessage>{sucessMessage}</SuccessMessage>}
                </LoginFormContainer>
            </LoginContainer>
        </LoginComponentContainer>
    );
};

export default Login;
