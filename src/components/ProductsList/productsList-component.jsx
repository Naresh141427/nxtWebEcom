
import { useEffect, useState } from 'react';
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



const ProductsList = () => {
    const [productsList, setProductsList] = useState([])
    const [isDataLoading, setIsDataLoadng] = useState(false)
    const [sortOption, setSortOption] = useState("")
    const [sortProductsOrder, setSortProductsOrder] = useState("")
    const [searchProducts, setSearchProducts] = useState("")
    const [categoryName, setCategoryName] = useState("")
    const [rating, setRating] = useState("")
    console.log(searchProducts, categoryName, rating);


    useEffect(() => {

        const fetchProducts = async () => {
            setIsDataLoadng(true)
            try {

                const jtwToken = Cookies.get("jwt_token")
                const url = `https://apis.ccbp.in/products?sort_by=${sortOption}`
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
                    setIsDataLoadng(false)

                }
            } catch (e) {
                console.error(e.message)
            }
        }
        fetchProducts()

    }, [sortOption])

    const sortProducts = (value) => {
        setSortOption(value)
        setSortProductsOrder(value)
    }


    if (isDataLoading) {
        return (
            <ProductsContainer>
                <LoaderContainer>
                    <ThreeDots color='blue' />
                </LoaderContainer>
            </ProductsContainer>
        )
    } else {
        return (
            <ProductsContainer>
                <FilterProducts
                    setSearchProducts={setSearchProducts}
                    setCategoryName={setCategoryName}
                    setRating={setRating}
                />
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
            </ProductsContainer>
        )
    }
}
export default ProductsList