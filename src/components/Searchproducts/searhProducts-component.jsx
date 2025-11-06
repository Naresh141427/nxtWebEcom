import { useEffect, useState, useRef } from "react"
import {
    SearchContainer,
    SearchInput,
    SearchIcon,
    SearchIconButton
} from "./searchProducts-styles.js"

const SearchProducts = ({ handleSearchproducts, currentSearch }) => {
    const [searchProduct, setSearchedProduct] = useState("")
    const inputRef = useRef()

    useEffect(() => {
        setSearchedProduct(currentSearch)
    }, [currentSearch])

    const handleOnSearch = (e) => {
        const productName = e.target.value
        setSearchedProduct(productName)
    }
    const handleForm = (e) => {
        e.preventDefault()
        handleSearchproducts(searchProduct)
        if (inputRef.current) inputRef.current.blur()
    }
    return (
        <SearchContainer
            onSubmit={handleForm}
        >
            <SearchInput
                type="search"
                placeholder="Search"
                value={searchProduct}
                ref={inputRef}
                onChange={handleOnSearch}
            />
            <SearchIconButton type="submit" >
                <SearchIcon />
            </SearchIconButton>

        </SearchContainer>
    )
}

export default SearchProducts