
import React from "react"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"

import {
    PrimeDealsContainer,
    PrimeDealsSectionHeader,
    PrimeDealsSectionItemsListContainer,
    PrimeDealsFailureImage,
    LoaderContainer
} from "./primeDeals-styles.js"

import { ThreeDots } from "react-loader-spinner"
import ProductCard from "../ProductsCard/productsCard-component.jsx"

const apiStatusConstants = {
    initial: "INITIAL",
    inProgress: "IN_PROGRESS",
    success: "SUCCESS",
    failure: "FAILURE"

}

const PrimeDealSection = () => {
    const [primeDealProducts, setPrimeDealProducts] = useState([])
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
    const [isPrimeFailureImageLoaded, setIsPrimeFailureImageLoaded] = useState(false)


    useEffect(() => {
        const fetchPrimeProducts = async () => {

            const jwtToken = Cookies.get("jwt_token")
            const url = "https://apis.ccbp.in/prime-deals"
            const options = {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
                method: "GET"
            }
            setApiStatus(apiStatusConstants.inProgress)
            const response = await fetch(url, options)
            if (response.ok) {

                const { prime_deals } = await response.json()
                setPrimeDealProducts(prime_deals)
                setApiStatus(apiStatusConstants.success)
            }
            if (response.status === 401) {
                setApiStatus(apiStatusConstants.failure)
            }
        }
        fetchPrimeProducts()

    }, [])

    const getPrimeDeals = () => {
        return (
            <PrimeDealsContainer>
                <PrimeDealsSectionHeader>Exclusive Prime Deals</PrimeDealsSectionHeader>
                <PrimeDealsSectionItemsListContainer>
                    {primeDealProducts.map(({ id, title, brand, price, rating, image_url }) => {
                        return (<ProductCard
                            key={id}
                            title={title}
                            brand={brand}
                            price={price}
                            rating={rating}
                            imageUrl={image_url}
                        />)
                    })}
                </PrimeDealsSectionItemsListContainer>

            </PrimeDealsContainer>

        )
    }


    const primeDealsFailure = () => {

        return (
            <PrimeDealsContainer>
                <PrimeDealsFailureImage
                    src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
                    alt="Register Prime"
                    loading="lazy"
                    className={isPrimeFailureImageLoaded ? "loaded" : ""}
                    onLoad={() => setIsPrimeFailureImageLoaded(true)}
                />
            </PrimeDealsContainer>
        )
    }
    const ShowLoader = () => {
        return (
            <PrimeDealsContainer>
                <LoaderContainer>
                    <ThreeDots color='blue' />
                </LoaderContainer>
            </PrimeDealsContainer>
        )
    }

    switch (apiStatus) {
        case apiStatusConstants.inProgress:
            return ShowLoader();
        case apiStatusConstants.success:
            return getPrimeDeals()
        case apiStatusConstants.failure:
            return primeDealsFailure()
        default:
            return null
    }


}

export default React.memo(PrimeDealSection)