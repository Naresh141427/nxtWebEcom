import { useState } from "react"
import {
    SearchContainer,
    SearchInput,
    SearchIcon
} from "./searchProducts-styles.js"

const SearchProducts = ({ setSearchProducts }) => {
    const [searcValue, setSearchValue] = useState("")
    const handleOnSearch = (e) => {
        const productName = e.target.value
        setSearchProducts(productName)
        setSearchValue(productName)
    }
    return (
        <SearchContainer>
            <SearchInput
                type="search"
                placeholder="Search"
                value={searcValue}
                onChange={handleOnSearch}
            />
            <SearchIcon />
        </SearchContainer>
    )
}

export default SearchProducts