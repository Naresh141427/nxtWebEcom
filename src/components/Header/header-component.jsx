import { useNavigate } from "react-router-dom"
import { useAuth } from "../../Context/AuthContext"
import { useCart } from "../../Context/CartContext"

import {
    NavHeader,
    Navbar,
    NavbarLogo,
    NavMenu,
    NavMenuLinks,
    MobileNav,
    MobileNavLink,
    MobileIcon,
    MobileNavMenu,
    NavButton,
    CartTotalItems
} from "./header-styles"
import { useState } from "react"

const Header = () => {
    const { cartItems, isBouncing } = useCart()
    const { logOut } = useAuth()
    const [navBarLogoLoaded, setNavBarLogoLoaded] = useState(false)
    const [navBarLogOutLoaded, setNavBarLogOutLoaded] = useState(false)
    const [homeIconLoaded, setHomeIconLoaded] = useState(false)
    const [productsIconLoaded, setProductsIconLoaded] = useState(false)
    const [cartIconLoaded, setCartIconLoaded] = useState(false)
    const navigate = useNavigate()

    const cartLength = cartItems.length
    const handleMobileLogOut = () => {
        logOut()
        navigate("/login", { replace: true })

    }
    const handleNavLogoClick = () => {
        navigate("/")
    }
    return (
        <NavHeader>
            <Navbar>
                <NavbarLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                    alt="website-logo"
                    loading="lazy"
                    width="136px"
                    height="32px"
                    className={navBarLogoLoaded ? "loaded" : ""}
                    onLoad={() => setNavBarLogoLoaded(true)}
                    onClick={handleNavLogoClick}
                />
                <NavMenu>
                    <NavMenuLinks to="/">Home</NavMenuLinks>
                    <NavMenuLinks to="/products">Products</NavMenuLinks>
                    <NavMenuLinks to="/cart" className={`isBouncing ? "bounce" : ""`}>
                        Cart
                        {cartLength > 0 ? <CartTotalItems>{cartLength}</CartTotalItems> : ""}
                    </NavMenuLinks>
                    <NavButton onClick={handleMobileLogOut}>LogOut</NavButton>
                </NavMenu>
            </Navbar>

            {/* Mobile menu */}
            <MobileNav>
                <NavbarLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                    alt="website-logo"
                    loading="lazy"
                    width="136px"
                    height="32px"
                    className={navBarLogoLoaded ? "loaded" : ""}
                    onLoad={() => setNavBarLogoLoaded(true)}
                    onClick={() => handleNavLogoClick}

                />
                <MobileIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                    alt="nav-logout"
                    loading="lazy"
                    height="32px"
                    width="32px"
                    className={navBarLogOutLoaded ? "loaded" : ""}
                    onLoad={() => setNavBarLogOutLoaded(true)}
                    onClick={handleMobileLogOut}
                />
            </MobileNav>
            <MobileNavMenu>
                <MobileNavLink to="/">
                    <MobileIcon
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                        alt="nav-home"
                        loading="lazy"
                        height="32px"
                        width="32px"
                        className={homeIconLoaded ? "loaded" : ""}
                        onLoad={() => setHomeIconLoaded(true)}

                    />
                </MobileNavLink>
                <MobileNavLink to="/products">
                    <MobileIcon
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                        alt="nav-products"
                        loading="lazy"
                        height="32px"
                        width="32px"
                        className={productsIconLoaded ? "loaded" : ""}
                        onLoad={() => setProductsIconLoaded(true)}
                    />
                </MobileNavLink>
                <MobileNavLink to="/cart">
                    <MobileIcon
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
                        alt="nav-cart"
                        loading="lazy"
                        height="32px"
                        width="32px"
                        className={`${cartIconLoaded ? "loaded" : ""} ${isBouncing ? "bounce" : ""}`}
                        onLoad={() => setCartIconLoaded(true)}

                    />
                </MobileNavLink>
            </MobileNavMenu>
        </NavHeader>
    )
}

export default Header