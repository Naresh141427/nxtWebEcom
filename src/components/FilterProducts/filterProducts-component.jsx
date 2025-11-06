
import Category from "../Category/category-component.jsx"
import Rating from "../Rating/rating-component.jsx"

import SearchProducts from "../Searchproducts/searhProducts-component.jsx"

import {
    CategoriesContainer,
    SearchContainer,
    Container,
    ClearFiltersButton

} from "./filterProducts-styles.js"

const FilterProducts = (props) => {
    const { handleCategoryId, handleRatingChange, handleSearchproducts, currentSearch, currentCategory, currentRating, clearSearchParams } = props
    const handlerProductsFilter = () => {
        clearSearchParams({})
    }
    return (
        <Container>
            <SearchContainer>
                <SearchProducts handleSearchproducts={handleSearchproducts} currentSearch={currentSearch} />
            </SearchContainer>
            <CategoriesContainer>
                <Category handleCategoryId={handleCategoryId} currentCategory={currentCategory} />
            </CategoriesContainer>
            <Rating handleRatingChange={handleRatingChange} currentRating={currentRating} />
            <ClearFiltersButton onClick={handlerProductsFilter}>clear filters</ClearFiltersButton>
        </Container>
    )
}
export default FilterProducts