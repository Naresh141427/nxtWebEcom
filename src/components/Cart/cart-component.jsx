import { useCart } from '../../Context/CartContext';
import './cart-styles.js';
import CartDetails from '../CartDetails/cartDetails-component.jsx';

import { Container, CartContainer, SummaryTitle } from "./cart-styles.js"

const Cart = () => {
    const { cartItems } = useCart()
    console.log(cartItems);
    return (
        <Container>
            <SummaryTitle>Your Cart Items: </SummaryTitle>
            <CartContainer>
                {cartItems.map(({ id, ...cartItem }) => {
                    return (
                        <CartDetails key={id} cartItem={cartItem} />
                    )
                })}
            </CartContainer>
        </Container>
    );
};

export default Cart;