import { useEffect, useState, useRef } from "react"
import {
    SearchContainer,
    SearchInput,
    SearchIcon,
    SearchIconButton
} from "./searchProducts-styles.js"

const SearchProducts = ({ handleSearchproducts, currentSearch }) => {
    const [searchProduct, setSearchedProduct] = useState("")
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef()

    useEffect(() => {
        if (!isFocused) setSearchedProduct(currentSearch)
    }, [currentSearch, isFocused])

    const handleOnSearch = (e) => {
        const productName = e.target.value
        setSearchedProduct(productName)
        if (productName === "") handleSearchproducts("")
    }
    const handleForm = (e) => {
        e.preventDefault()
        handleSearchproducts(searchProduct)
        if (inputRef.current) inputRef.current.blur()
    }
    const handleFocus = () => {
        setIsFocused(true)
        setSearchedProduct("")
    }
    const handleBlur = () => {
        setIsFocused(false)
        if (searchProduct === "") setSearchedProduct(currentSearch)

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
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <SearchIconButton type="submit" >
                <SearchIcon />
            </SearchIconButton>

        </SearchContainer>
    )
}

export default SearchProducts