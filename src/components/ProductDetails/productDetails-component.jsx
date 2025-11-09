
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

const ProductDetails = ({ productDetailsObject }) => {
    const { addItemsToTheCart } = useCart()
    const { similar_products: similarProducts, ...productInfo } = productDetailsObject
    const { title, price, image_url, rating, total_reviews, description, availability, brand } = productInfo
    const handleAddingItemsToCart = () => {
        addItemsToTheCart({ ...productInfo })
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
                        <ProductReview>{total_reviews} Reviews</ProductReview>
                    </ProductReviewContainer>
                    <ProductDescription>{description}</ProductDescription>
                    <Avialability>Available: <SpecialText>{availability}</SpecialText></Avialability>
                    <Avialability>Brand: <SpecialText>{brand}</SpecialText></Avialability>
                    <HorizontalRule />
                    <AddTOCartContainer>
                        <QuantityControlContainer>
                            <IncreaseQuanity></IncreaseQuanity>
                            <Quantity>1</Quantity>
                            <DecreaseQuantity></DecreaseQuantity>
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






























