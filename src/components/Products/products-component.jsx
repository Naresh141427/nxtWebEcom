
import PrimeDealsComponent from '../PrimDeals/primeDeals-component';
import ProductsList from '../ProductsList/productsList-component';
import { Container } from './products-styles';





const Products = () => {

    return (
        <Container>
            <PrimeDealsComponent />
            <ProductsList />
        </Container>
    )

};

export default Products;