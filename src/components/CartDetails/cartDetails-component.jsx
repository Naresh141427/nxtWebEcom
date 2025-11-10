

import {
    Container,
    ProductImageContainer,
    ProductImage,
    QuantityControlContainer,
    IncreaseQuanity,
    QuantityTitle,
    DecreaseQuanity,
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
    TotalPriceOfEachItem

} from "./cartDetails-styles.js"

const CartDetails = ({ cartItem }) => {
    const { title, price, image_url, rating, total_reviews, brand, quantity } = cartItem
    return (
        <Container>
            <ProductImageContainer>
                <ProductImage src={image_url} alt={title} />
                <QuantityControlContainer>
                    <DecreaseQuanity />
                    <QuantityTitle>Qty: {quantity}</QuantityTitle>
                    <IncreaseQuanity />
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
                <TotalPriceOfEachItem>Total Price: {price * quantity}/-</TotalPriceOfEachItem>
            </CartProductDetailsContainer>

        </Container>
    )
}

export default CartDetails