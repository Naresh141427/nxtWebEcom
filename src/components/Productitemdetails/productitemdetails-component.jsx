import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie"

import { ThreeDots } from 'react-loader-spinner';
import './productitemdetails-styles.js';
import { apiStatusConstants } from '../../APIConstanstants/apiConstants.js';
import NoProducts from '../NoProducts/noProducts-component';


import { LoaderContainer } from './productitemdetails-styles.js';
import ProductDetails from '../ProductDetails/productDetails-component.jsx';

const ProductItemDetails = () => {
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
    const [productDetailsObject, setProductDetailsObject] = useState({})
    const { id: productId } = useParams()

    useEffect(() => {
        const fetchDetails = async () => {
            setApiStatus(apiStatusConstants.inProgress)
            try {
                const jwtToken = Cookies.get("jwt_token")
                const url = `https://apis.ccbp.in/products/${productId}`
                const options = {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    },
                    method: "GET"
                }
                const response = await fetch(url, options)
                if (response.ok) {
                    const data = await response.json()
                    setApiStatus(apiStatusConstants.success)
                    setProductDetailsObject(data)
                }
            } catch (e) {
                console.error(e.message)
            }
        }
        fetchDetails()
    }, [productId])

    const showLoader = () => {
        return (
            <LoaderContainer>
                <ThreeDots color='blue' />
            </LoaderContainer>
        )

    }

    switch (apiStatus) {
        case apiStatusConstants.inProgress:
            return showLoader()
        case apiStatusConstants.success:
            return <ProductDetails productDetailsObject={productDetailsObject} />
        case apiStatusConstants.failure:
            return <NoProducts />
    }
}

export default ProductItemDetails;