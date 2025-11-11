
import SimilarProducts from "../SimilarProducts/similarProducts-component.jsx"
import { useCart } from "../../Context/CartContext.jsx"
import {
    ProductImageContainer,
    ProductImage,
    ProductDetailsContainer,
    ProductDescriptionContainer,
    ProductPrice,
    ProductTitle,
    ProductReviewContainer,
    ProductRatingContainer,
    ProductRating,
    StarIcon,
    ProductReview,
    ProductDescription,
    Avialability,
    SpecialText,
    HorizontalRule,
    AddTOCartContainer,
    IncreaseQuanity,
    QuantityControlContainer,
    Quantity,
    DecreaseQuantity,
    AddToCartButton,
    TopSection,
    BottomSection

} from "./productDetails-styles.js"
import { useState } from "react"

const ProductDetails = ({ productDetailsObject }) => {
    const { addItemsToTheCart } = useCart()
    const [productQuantity, setProductQuantity] = useState(1)
    const { similar_products: similarProducts, ...productInfo } = productDetailsObject
    const { title, price, image_url, rating, total_reviews, description, availability, brand } = productInfo

    const handleAddingItemsToCart = () => {
        addItemsToTheCart(productInfo, productQuantity)

    }
    const handleItemQuantityIncrease = () => {
        setProductQuantity(prevQunity => prevQunity + 1)
    }
    const handleItemQuantityDecrease = () => {
        if (productQuantity > 1) setProductQuantity(prevQunity => prevQunity - 1)
    }
    return (
        <ProductDetailsContainer>
            <TopSection>
                <ProductImageContainer>
                    <ProductImage
                        src={image_url}
                        alt={title}
                    />
                </ProductImageContainer>
                <ProductDescriptionContainer>
                    <ProductTitle>{title}</ProductTitle>
                    <ProductPrice>RS {price}/-</ProductPrice>
                    <ProductReviewContainer>
                        <ProductRatingContainer>
                            <ProductRating>{rating}</ProductRating>
                            <StarIcon />
                        </ProductRatingContainer>
                        <ProductReview>( {total_reviews} Reviews )</ProductReview>
                    </ProductReviewContainer>
                    <ProductDescription>{description}</ProductDescription>
                    <Avialability>Available: <SpecialText>{availability}</SpecialText></Avialability>
                    <Avialability>Brand: <SpecialText>{brand}</SpecialText></Avialability>
                    <HorizontalRule />
                    <AddTOCartContainer>
                        <QuantityControlContainer>
                            <IncreaseQuanity onClick={handleItemQuantityIncrease} />
                            <Quantity>{productQuantity}</Quantity>
                            <DecreaseQuantity onClick={handleItemQuantityDecrease} />
                        </QuantityControlContainer>
                        <AddToCartButton onClick={handleAddingItemsToCart}>
                            ADD TO CART
                        </AddToCartButton>
                    </AddTOCartContainer>
                </ProductDescriptionContainer>
            </TopSection>
            <BottomSection>
                <SimilarProducts similarProducts={similarProducts} />
            </BottomSection>
        </ProductDetailsContainer>


    )
}

export default ProductDetails






























