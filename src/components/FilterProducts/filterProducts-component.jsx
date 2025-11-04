
import Category from "../Category/category-component.jsx"
import Rating from "../Rating/rating-component.jsx"

import SearchProducts from "../Searchproducts/searhProducts-component.jsx"

import {
    CategoriesContainer,
    SearchContainer,
    Container

} from "./filterProducts-styles.js"

const FilterProducts = (props) => {
    const { setSearchProducts, setCategoryName, setRating } = props
    return (
        <Container>
            <SearchContainer>
                <SearchProducts setSearchProducts={setSearchProducts} />
            </SearchContainer>
            <CategoriesContainer>
                <Category setCategoryName={setCategoryName} />
            </CategoriesContainer>
            <Rating setRating={setRating} />
        </Container>
    )
}
export default FilterProducts