
import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
    BottomSection,
    QuantityContainer

} from "./productDetails-styles.js"

import { showSuccessToast } from "../../Utils/toastUtils.js"
import SimilarProducts from "../SimilarProducts/similarProducts-component.jsx"

const ProductDetails = ({ productDetailsObject }) => {
    const navigate = useNavigate()

    const { addItemsToTheCart, cartItems, triggerBounce } = useCart()
    const [productQuantity, setProductQuantity] = useState(1)
    const { similar_products: similarProducts, ...productInfo } = productDetailsObject
    const { id, title, price, image_url, rating, total_reviews, description, availability, brand } = productInfo

    const isItemPresentInCart = cartItems.some(cartItem => cartItem.id === id)
    const handleAddingItemsToCart = () => {
        if (isItemPresentInCart) {
            navigate("/cart")
        }
        else {
            addItemsToTheCart(productInfo, productQuantity)
            showSuccessToast("Item Added to cart", 500);
            triggerBounce()
        }

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
                            {!isItemPresentInCart ?
                                <QuantityContainer> <DecreaseQuantity onClick={handleItemQuantityDecrease} /> </QuantityContainer> :
                                ""
                            }
                            {!isItemPresentInCart ? (<Quantity>{productQuantity}</Quantity>) : ""}
                            {!isItemPresentInCart ? <QuantityContainer> <IncreaseQuanity onClick={handleItemQuantityIncrease} /></QuantityContainer> : ""}
                        </QuantityControlContainer>
                        <AddToCartButton onClick={handleAddingItemsToCart}>
                            {isItemPresentInCart ? "GO TO CART" : "ADD TO CART"}
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






























