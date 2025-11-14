import { useCart } from "../../Context/CartContext.jsx"


import {
    Container,
    ProductImageContainer,
    ProductImage,
    QuantityControlContainer,
    IncreaseQuanity,
    QuantityTitle,
    // DecreaseQuanity,
    CartProductDetailsContainer,
    CartProductTitle,
    CartProductBrand,
    CartProductRatingContainer,
    CartProductRatingBox,
    StarIcon,
    CartProductRating,
    CartProductReview,
    CartProductPrice,
    CartProductReviewContainer,
    CartProductDetailsTopContainer,
    CartPriceContainer,
    TotalPriceOfEachItem,
    CloseIcon,
    QuantityContainer,
    DecreaseQuantity,
    // IncreaseQuanity

} from "./cartDetails-styles.js"
import { showErrorToast } from "../../Utils/toastUtils.js"

const CartDetails = ({ cartItem }) => {
    const { decreaseItemsQuantity, addItemsToTheCart, filterCartItems } = useCart()
    const { title, price, image_url, rating, total_reviews, brand, quantity } = cartItem

    const handleRemoveItem = () => {
        filterCartItems(cartItem)
        showErrorToast("Item Removed from cart", 500)

    }


    return (
        <Container>
            <ProductImageContainer>
                <ProductImage src={image_url} alt={title} />
                <QuantityControlContainer>
                    {/* <DecreaseQuanity onClick={() => decreaseItemsQuantity(cartItem)} /> */}
                    <QuantityContainer> <DecreaseQuantity onClick={() => decreaseItemsQuantity(cartItem)} /> </QuantityContainer>
                    <QuantityTitle>Qty: {quantity}</QuantityTitle>
                    <QuantityContainer> <IncreaseQuanity onClick={() => addItemsToTheCart(cartItem)} /></QuantityContainer>
                    {/* <IncreaseQuanity onClick={() => addItemsToTheCart(cartItem)} /> */}
                </QuantityControlContainer>
            </ProductImageContainer>
            <CartProductDetailsContainer>
                <CartProductDetailsTopContainer>
                    <CartProductTitle>{title}</CartProductTitle>
                    <CartProductBrand>{brand}</CartProductBrand>
                </CartProductDetailsTopContainer>
                <CartProductRatingContainer>
                    <CartProductRatingBox>
                        <CartProductRating>{rating}</CartProductRating>
                        <StarIcon />
                    </CartProductRatingBox>
                    <CartProductReviewContainer>
                        <CartProductReview>({total_reviews} reviews) </CartProductReview>
                    </CartProductReviewContainer>
                </CartProductRatingContainer>
                <CartPriceContainer>
                    <CartProductPrice>Price: {price}/-</CartProductPrice>
                </CartPriceContainer>
                <TotalPriceOfEachItem>Total Price: Rs. {price * quantity}/-</TotalPriceOfEachItem>
            </CartProductDetailsContainer>
            <CloseIcon onClick={handleRemoveItem} />
        </Container>
    )
}

export default CartDetails