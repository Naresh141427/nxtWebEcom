import {
    Container,
    FailureImage,
    FailureHeading,
    FailureDescription,

} from "./productsFailure-styles.js"

const ProductsFaiulre = ({ erroeMessage }) => {
    return (
        <Container>
            <FailureImage
                alt="products failure"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
            />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureDescription>{erroeMessage}</FailureDescription>
        </Container>
    )

}

export default ProductsFaiulre