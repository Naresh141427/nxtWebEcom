
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    DesktopDetailaContainer,
    DesktopSectionContainer,
    HomeHeader,
    HomeMain,
    HomeSection,
    HomeSectionImage,
    HomeSectionParagraph,
    ShopNowButton
} from "./home-styles.js"

const Home = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const navigate = useNavigate()
    const handleShopNowButton = () => navigate("/products")
    return (

        <HomeMain>
            <HomeSection>
                {/* Mobile Home View */}
                <HomeHeader>
                    Clothes  That Get <br /> You Noticed
                </HomeHeader>
                <HomeSectionImage
                    alt=" clothes-that-get-you noticed"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                    height="182px"
                    width="176px"
                    loading="lazy"
                    className={imageLoaded ? "loaded" : ""}
                    onLoad={() => setImageLoaded(true)}
                />
                <HomeSectionParagraph>
                    Fashion is the part of daily air and it does not quiet help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution.Your  fashion makes you been seen and heard that way are. So, celebrate the seasons new and exciting fashion in your own way
                </HomeSectionParagraph>
                <ShopNowButton onClick={handleShopNowButton}>Shop Now</ShopNowButton>
            </HomeSection>
            {/* Destop Home View */}
            <DesktopSectionContainer>
                <DesktopDetailaContainer>
                    <HomeHeader>
                        Clothes  That Get You Noticed
                    </HomeHeader>
                    <HomeSectionParagraph>
                        Fashion is the part of daily air and it does not quiet help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution.Your  fashion makes you been seen and heard that way are. So, celebrate the seasons new and exciting fashion in your own way
                    </HomeSectionParagraph>
                    <ShopNowButton onClick={handleShopNowButton}>Shop Now</ShopNowButton>
                </DesktopDetailaContainer>
                <HomeSectionImage
                    alt=" clothes-that-get-you noticed"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                    height="400px"
                    width="400px"
                    loading="lazy"
                    className={imageLoaded ? "loaded" : ""}
                    onLoad={() => setImageLoaded(true)}
                />
            </DesktopSectionContainer>
        </HomeMain>
    );
};

export default Home;