

import {
    SortByText,
    PriceLabel,
    PriceCombox,
    PriceComboxOptions,
    PriceComboxContainer,
    SortContainer,
    StyledFaSortAmountUp,
    StyledFaSortAmountDown

} from "./sortProducts-styles"

const SortProducts = ({ sortProducts, sortProductsOrder }) => {

    const handlePriceCombox = (e) => {
        sortProducts(e.target.value)
    }
    return (
        <>

            <PriceComboxContainer>
                <SortContainer>
                    {sortProductsOrder === "PRICE_HIGH" ? <StyledFaSortAmountDown /> : <StyledFaSortAmountUp />}

                    <SortByText>Sort by</SortByText>
                </SortContainer>
                <PriceLabel htmlFor="sortingByPrice">Price</PriceLabel>
                <PriceCombox id="sortingByPrice" onChange={handlePriceCombox} value={sortProductsOrder}>
                    <PriceComboxOptions value="">Sort By</PriceComboxOptions>
                    <PriceComboxOptions value="PRICE_LOW" >Low - High</PriceComboxOptions>
                    <PriceComboxOptions value="PRICE_HIGH" >High - Low</PriceComboxOptions>
                </PriceCombox>
            </PriceComboxContainer>
        </>
    )
}

export default SortProducts