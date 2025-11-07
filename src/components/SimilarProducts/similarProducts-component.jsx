import ProductCard from "../ProductsCard/productsCard-component"

import {
    SimilarProductsContainer,
    SimilarProductsTitle
} from "./similarProducts-styles.js"
const SimilarProducts = ({ similarProducts }) => {
    return (
        <>
            <SimilarProductsTitle>Similar Products</SimilarProductsTitle>
            <SimilarProductsContainer>
                {
                    similarProducts.map(({ title, brand, image_url, price, rating, id }) => {
                        return (
                            <ProductCard
                                key={id}
                                productId={id}
                                brand={brand}
                                imageUrl={image_url}
                                price={price}
                                rating={rating}
                                title={title}
                            />
                        )
                    }

                    )
                }
            </SimilarProductsContainer>
        </>
    )
}

export default SimilarProducts