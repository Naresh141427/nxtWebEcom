import { Link } from "react-router-dom"
import styled from "styled-components"

import { DesktopBreakpoints, MobilebreakPoints } from "../../Breakpoints/breakpoints"


export const ProductContainer = styled.li`
    max-width: 265.438px;
    @media(min-width: ${MobilebreakPoints.small}){
        width: 48%
    }
    @media(min-width: ${MobilebreakPoints.large}){
        width: 45%;
    }
    @media(min-width: ${DesktopBreakpoints.medium}){
        width: 45%;
        margin-bottom: 1.5rem;
    }
    @media(min-width: ${DesktopBreakpoints.large}){
        width: 40%;
    }

    

`
export const ProductCardItemContainer = styled(Link)`
 @media(min-width: ${MobilebreakPoints.extraSmall}){
    display: flex;
    flex-direction:column;
    text-decoration: none;
 }

`

export const ProductCardItemImage = styled.img`
 @media(min-width: ${MobilebreakPoints.extraSmall}){
    width: 100%;
    border-radius: 0.6rem;
    background-color: #d7dfe9;;
    transition: background-color 0.3s ease, opacity 0.3s ease;
    &.loaded{
      background-color: transparent;
      opacity: 1;
    }
 }
 @media(min-width: ${MobilebreakPoints.small}){
    width: 100%;
    height: auto;
 }
 
 @media(min-width: ${MobilebreakPoints.large}){
    width: 100%;
 }

`

export const ProductCardDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 1rem;
`
export const ProductCardItemTitle = styled.span`
    color:  #1e293b;
    font-size: 1rem;
    font-weight: 900;  
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.3rem;
    } 
    ${'' /* @media(min-width: ${DesktopBreakpoints.medium}){
    font-size: 1.5rem;
    } */}
`
export const ProductCardItemBrand = styled.span`
    color:  #475569;
    font-size: 0.9rem;
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1rem;
    }
    @media(min-width: ${DesktopBreakpoints.medium}){
    font-size: 1.2rem;
    }
`
export const ProductCardItemPriceDetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ProductCardItemPrice = styled.span`
    color:   #1e293b;
    font-size: 1rem;
    font-weight: bold; 
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.3rem;
    }   
    ${'' /* @media(min-width: ${DesktopBreakpoints.medium}){
    font-size: 1.5rem;
    }   */}
`
export const ProductCardItemRatingContainer = styled.div`
    background-color:#0b69ff;
    padding: 0.3rem 1.4rem;
    border-radius: 0.3rem;
`
export const ProductCardItemRating = styled.span`
    display: block;
    color:   white;
    font-size: 1rem;    
    font-weight: bold;
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.3rem;
    }
    ${'' /* @media(min-width: ${DesktopBreakpoints.medium}){
    font-size: 1.5rem;
    } */}
    
    
`
