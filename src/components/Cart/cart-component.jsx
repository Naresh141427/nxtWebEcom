import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import './cart-styles.js';
import CartDetails from '../CartDetails/cartDetails-component.jsx';


import { Container, CartContainer, SummaryTitle, EmptyCartcontainer, EmptyCartHeader, ShopNowButton, CartTotalHeading } from "./cart-styles.js"


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
                        <CartTotalHeading>Total Amount: {cartTotal}/-</CartTotalHeading>
                    </CartContainer>
                ) :
                    (
                        <EmptyCartcontainer>
                            <EmptyCartHeader>Your Cart Is Empty</EmptyCartHeader>
                            <ShopNowButton onClick={handleShopNowButton}>Shop Now</ShopNowButton>
                        </EmptyCartcontainer>
                    )
            }
        </Container>

    );
};

export default Cart;