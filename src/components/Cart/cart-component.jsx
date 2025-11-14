import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import './cart-styles.js';
import CartDetails from '../CartDetails/cartDetails-component.jsx';


import {
    Container,
    CartContainer,
    SummaryTitle,
    EmptyCartcontainer,
    EmptyCartHeader,
    ShopNowButton,
    CartTotalHeading,
    EmptyCartDescription,
    EmptyCartImage
} from "./cart-styles.js"


const Cart = () => {
    const navigate = useNavigate()
    const { cartItems, cartTotal } = useCart()
    const handleShopNowButton = () => {
        navigate("/products")
    }


    return (
        <Container>
            {
                cartItems.length > 0 ? (
                    <CartContainer>
                        <SummaryTitle>Your Cart Items: </SummaryTitle>
                        {cartItems.map((cartItem) => {
                            return (
                                <CartDetails key={cartItem.id} cartItem={cartItem} />
                            )
                        })}
                        <CartTotalHeading>Order Total: Rs.{cartTotal}/-</CartTotalHeading>
                    </CartContainer>
                ) :
                    (
                        <EmptyCartcontainer>
                            <EmptyCartImage
                                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                                alt="empty cart image"

                            />
                            <EmptyCartHeader>Your Cart Is Empty</EmptyCartHeader>
                            <EmptyCartDescription>Add items to your cart to see them here"</EmptyCartDescription>
                            <ShopNowButton onClick={handleShopNowButton}>Shop Now</ShopNowButton>
                        </EmptyCartcontainer>
                    )
            }
        </Container>

    );
};

export default Cart;