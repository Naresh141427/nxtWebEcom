
import SortProducts from "../Sortproducts/sortProducts-component.jsx"
import {
    ProductHeaderContainer,
    ProductsHeader
} from "./productsHeader-styles.js"

const ProductHeader = ({ sortProducts, sortProductsOrder }) => {
    return (
        <ProductHeaderContainer>
            <ProductsHeader>All Products</ProductsHeader>
            <SortProducts sortProducts={sortProducts} sortProductsOrder={sortProductsOrder} />
        </ProductHeaderContainer>
    )
}

export default ProductHeader