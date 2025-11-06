
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import Cookies from 'js-cookie';

import {
    ProductsListContainer,
    ProductsContainer,
    LoaderContainer,
    AllProductsContainer
} from "./productsList-styles.js"

import ProductHeader from '../ProductsHeader/productsheader-component.jsx';
import FilterProducts from '../FilterProducts/filterProducts-component.jsx';
import ProductCard from '../ProductsCard/productsCard-component.jsx';
import ProductsFaiulre from '../ProductsFailure/productsFailure-component.jsx';
import NoProducts from '../NoProducts/noProducts-component.jsx';

import { apiStatusConstants } from '../../APIConstansta/apiConstants.js';

const ProductsList = () => {
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
    const [productsList, setProductsList] = useState([])
    // const [sortProductsOrder, setSortProductsOrder] = useState("")
    // const [searchProducts, setSearchProducts] = useState("")
    // const [categoryId, setCategoryId] = useState("")
    // const [rating, setRating] = useState("")
    const [erroeMessage, seterroEMessage] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()

    const sortProductsOrder = searchParams.get('sort_by') || ''
    const searchProducts = searchParams.get('title_search') || ''
    const categoryId = searchParams.get('category') || ''
    const rating = searchParams.get('rating') || ''

    useEffect(() => {

        const fetchProducts = async () => {
            setApiStatus(apiStatusConstants.inProgress)
            seterroEMessage("")
            try {
                const jtwToken = Cookies.get("jwt_token")
                // const url = `https://apis.ccbp.in/products?sort_by=${sortProductsOrder}&category=${categoryId}&title_search=${searchProducts}&rating=${rating}`
                const queryString = searchParams.toString()
                const url = `https://apis.ccbp.in/products?${queryString}`
                const options = {
                    headers: {
                        Authorization: `Bearer ${jtwToken}`,
                    },
                    method: "GET"
                }
                const response = await fetch(url, options)
                if (response.ok) {
                    const { products } = await response.json()
                    setProductsList(products)
                    setApiStatus(apiStatusConstants.success)

                } else {
                    if (response.status === 401) {
                        setApiStatus(apiStatusConstants.failure)
                        seterroEMessage("Your session expired. Please log in again.")
                    } else {
                        setApiStatus(apiStatusConstants.failure)
                        seterroEMessage("Something went wrong. Server could not be reached.")
                    }
                }
            } catch (e) {
                console.error(e.message)
                seterroEMessage("Could not connect. Please check your internet.")
            }
        }
        fetchProducts()

    }, [searchParams])

    const sortProducts = (value) => {
        // setSortProductsOrder(value)
        setSearchParams(prevParams => {
            prevParams.set('sort_by', value)
            return prevParams
        })
    }

    const handleSearchproducts = (value) => {
        // setSearchProducts(value)
        // setCategoryId("")
        // setRating("")
        // setSortProductsOrder("")
        setSearchParams({ title_search: value })
    }
    const handleCategoryId = (value) => {
        // setCategoryId(value)
        // setSearchProducts("")
        // setRating("")
        // setSortProductsOrder("")
        setSearchParams({ category: value })
    }
    const handleRatingChange = (value) => {
        setSearchParams(prevParams => {
            prevParams.set('rating', value)
            return prevParams
        })

    }

    const getProducts = () => {

        return (
            <ProductsContainer>
                <FilterProducts
                    clearSearchParams={setSearchParams}
                    handleSearchproducts={handleSearchproducts}
                    handleCategoryId={handleCategoryId}
                    handleRatingChange={handleRatingChange}
                    currentSearch={searchProducts}
                    currentCategory={categoryId}
                    currentRating={rating}
                />
                {productsList.length === 0 ? (<NoProducts />) : (
                    <AllProductsContainer>
                        <ProductHeader sortProducts={sortProducts} sortProductsOrder={sortProductsOrder} />
                        <ProductsListContainer>
                            {productsList.map(({ title, brand, image_url, price, rating, id }) => {
                                return (
                                    <ProductCard
                                        key={id}
                                        brand={brand}
                                        imageUrl={image_url}
                                        price={price}
                                        rating={rating}
                                        title={title}
                                    />
                                )
                            })}
                        </ProductsListContainer>
                    </AllProductsContainer>
                )
                }

            </ProductsContainer >
        )
    }


    const showLoader = () => {
        return (
            <ProductsContainer>
                <LoaderContainer>
                    <ThreeDots color='blue' />
                </LoaderContainer>
            </ProductsContainer>
        )

    }

    switch (apiStatus) {
        case apiStatusConstants.inProgress:
            return showLoader();
        case apiStatusConstants.success:
            return getProducts();
        case apiStatusConstants.failure:
            return <ProductsFaiulre erroeMessage={erroeMessage} />;
        default:
            return null;

    }
}

export default ProductsList