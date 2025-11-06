import styled from "styled-components"
import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints"
import { DesktopDetailaContainer } from "../Home/home-styles"

export const Container = styled.div`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        display: flex;
        flex-direction:  column;
        align-items: center;
        margin-top: 1rem;
        gap: 1rem;
        height: 65vw;
        
    }
    @media(min-width: ${DesktopBreakpoints.medium}){
        height: 35vw;
    }
`
export const NoProductsImage = styled.img`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        width: 11rem;
        height: auto;
        
    }
    @media(min-width: ${MobilebreakPoints.small}){
        width: 14rem;
        height: 14rem
    }
    @media(min-width: ${MobilebreakPoints.small}){
        width: 16rem;
        height: 16rem
    }
    @media(min-width: ${DesktopBreakpoints.medium}){
        width: 20rem;
        height: 20rem
    }
`
export const NoProductsHeading = styled.h2`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        color: #12022f;
        font-size: 1rem;
        text-align: center;
        margin: 0;
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.3rem;
    }
    @media(min-width: ${DesktopBreakpoints.medium}){
        font-size: 1.5rem;
    }
`
export const NoProdutsDescription = styled.p`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        color: #64748b;
        font-size: 1rem;
        text-align: center; 
        margin: 0;
       
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.2rem;
    }
    @media(min-width: ${DesktopBreakpoints.medium}){
        font-size: 1.4rem;
    }

`