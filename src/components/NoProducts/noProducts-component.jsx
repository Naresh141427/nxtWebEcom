import {
    Container,
    NoProductsImage,
    NoProductsHeading,
    NoProdutsDescription,

} from "./noProduct-styles.js"

const NoProducts = () => {
    return (
        <Container>
            <NoProductsImage
                alt="no product"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
            />
            <NoProductsHeading>No Products Found</NoProductsHeading>
            <NoProdutsDescription>We could not find any products. Try other filter</NoProdutsDescription>
        </Container>
    )

}

export default NoProducts