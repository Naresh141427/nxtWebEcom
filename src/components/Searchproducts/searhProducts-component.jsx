import { useEffect, useState } from "react"
import {
    SearchContainer,
    SearchInput,
    SearchIcon,
    SearchIconButton
} from "./searchProducts-styles.js"

const SearchProducts = ({ handleSearchproducts, currentSearch }) => {
    const [searchProduct, setSearchedProduct] = useState("")

    useEffect(() => {
        setSearchedProduct(currentSearch)
    }, [currentSearch])

    const handleOnSearch = (e) => {
        const productName = e.target.value
        setSearchedProduct(productName)
        handleSearchproducts(searchProduct)
    }
    const handleForm = (e) => {
        e.preventDefault()
        handleSearchproducts(searchProduct)
    }
    return (
        <SearchContainer
            onSubmit={handleForm}
        >
            <SearchInput
                type="search"
                placeholder="Search"
                value={searchProduct}
                onChange={handleOnSearch}
            />
            <SearchIconButton type="submit" >
                <SearchIcon />
            </SearchIconButton>

        </SearchContainer>
    )
}

export default SearchProducts