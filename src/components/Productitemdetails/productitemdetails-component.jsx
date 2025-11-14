import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie";
import { ThreeDots } from 'react-loader-spinner';

import { apiStatusConstants } from '../../APIConstanstants/apiConstants.js';

import { LoaderContainer } from './productitemdetails-styles.js';
import ProductDetails from '../ProductDetails/productDetails-component.jsx';
import NoProducts from '../NoProducts/noProducts-component.jsx';
import NotFound from '../NotFound/notFound-component.jsx';

const ProductItemDetails = () => {
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
    const [productDetailsObject, setProductDetailsObject] = useState({});
    const { id: productId } = useParams();

    useEffect(() => {
        const fetchDetails = async () => {
            setApiStatus(apiStatusConstants.inProgress);

            try {
                const jwtToken = Cookies.get("jwt_token");
                const url = `https://apis.ccbp.in/products/${productId}`;
                const options = {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                    method: "GET",
                };

                const response = await fetch(url, options);

                if (response.ok) {
                    const data = await response.json();
                    setProductDetailsObject(data);
                    setApiStatus(apiStatusConstants.success);
                }
                else if (response.status === 404) {
                    setApiStatus(apiStatusConstants.notFound);
                }
                else {

                    setApiStatus(apiStatusConstants.failure);
                }
            }
            catch (error) {
                console.error(error.message);
                setApiStatus(apiStatusConstants.failure);
            }
        };

        fetchDetails();
    }, [productId]);

    const showLoader = () => (
        <LoaderContainer>
            <ThreeDots color="blue" />
        </LoaderContainer>
    );


    switch (apiStatus) {
        case apiStatusConstants.inProgress:
            return showLoader();

        case apiStatusConstants.success:
            return <ProductDetails productDetailsObject={productDetailsObject} />;

        case apiStatusConstants.notFound:
            return <NotFound />;

        case apiStatusConstants.failure:
            return <NoProducts />;

        default:
            return null;
    }
};

export default ProductItemDetails;
