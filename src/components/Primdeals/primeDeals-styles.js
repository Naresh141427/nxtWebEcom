import styled from "styled-components"

import { DesktopBreakpoints, MobilebreakPoints } from "../../Breakpoints/breakpoints"

export const PrimeDealsContainer = styled.div`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        display: flex;
        flex-direction: column;
        margin-bottom: 3rem;

    }

`

export const PrimeDealsSectionHeader = styled.h1`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        font-size: 1rem;
        color: #475569;
        font-weight: 900;
        margin-top: 1.9rem;
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.5rem;
    }
    @media(min-width: ${DesktopBreakpoints.large}){
        font-size: 2rem;
    }
`

export const PrimeDealsSectionItemsListContainer = styled.ul`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 0;
        list-style: none;
      }
      @media(min-width: ${MobilebreakPoints.large}){
        gap: 1.8rem;
      }
    
`
export const PrimeDealsFailureImage = styled.img`
 @media (min-width: ${MobilebreakPoints.extraSmall}){
    width: 100%;
    height: auto;
 }
 width: 90%;
 height: 18rem;
    
    
`

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
`