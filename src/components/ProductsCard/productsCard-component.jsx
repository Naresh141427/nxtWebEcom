
import { useState } from "react"
import {
    ProductContainer,
    ProductCardItemContainer,
    ProductCardItemImage,
    ProductCardItemTitle,
    ProductCardItemBrand,
    ProductCardItemPriceDetailsContainer,
    ProductCardItemPrice,
    ProductCardItemRatingContainer,
    ProductCardItemRating,
    ProductCardDetailsContainer,

} from "./productsCard-styles.js"
const ProductCard = (props) => {
    const [productImageLoaded, setProductImageLoaded] = useState(false)
    const { title, brand, imageUrl, price, rating } = props

    return (
        <ProductContainer>
            <ProductCardItemContainer>
                <ProductCardItemImage
                    alt="product-name"
                    src={imageUrl}
                    loading="lazy"
                    onLoad={() => setProductImageLoaded(true)}
                    className={productImageLoaded ? "loaded" : ""}
                />
                <ProductCardDetailsContainer>
                    <ProductCardItemTitle>{title}</ProductCardItemTitle>
                    <ProductCardItemBrand>{brand}</ProductCardItemBrand>
                    <ProductCardItemPriceDetailsContainer>
                        <ProductCardItemPrice>Rs {price}/-</ProductCardItemPrice>
                        <ProductCardItemRatingContainer>
                            <ProductCardItemRating>{rating}</ProductCardItemRating>
                        </ProductCardItemRatingContainer>
                    </ProductCardItemPriceDetailsContainer>
                </ProductCardDetailsContainer>
            </ProductCardItemContainer>
        </ProductContainer>

    )
}

export default ProductCard