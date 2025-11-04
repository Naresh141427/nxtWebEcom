
import PrimeDealSection from '../Primedeals/primeDeals-component.jsx';
import ProductsList from '../ProductsList/productsList-component.jsx';
import { Container } from './products-styles';





const Products = () => {

    return (
        <Container>
            <PrimeDealSection />
            <ProductsList />
        </Container>
    )

};

export default Products;