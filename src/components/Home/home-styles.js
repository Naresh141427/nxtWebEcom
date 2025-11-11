import styled from "styled-components";

import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints";

export const HomeMain = styled.main`
    @media (min-width: ${MobilebreakPoints.extraSmall}){
        width: 100%;
    }
    @media(min-width: ${MobilebreakPoints.large}){
        padding: 0 5rem;
    }
    @media (min-width: ${DesktopBreakpoints.medium}){
        display: flex;
        justify-content: space-between;
        padding: 0 10rem;

    }
`

export const HomeSection = styled.section`

    @media (min-width: ${MobilebreakPoints.extraSmall}){
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.2rem;
    @media(min-width: ${MobilebreakPoints.large}){
        display: none;
    }
    

}
    
`

export const HomeHeader = styled.h1`
    @media (min-width: ${MobilebreakPoints.extraSmall}){
        font-family: "Roboto";
        font-size: 1.6rem;
        font-weight: 900;
        color:  #1e293b;
        text-align: center;
        margin: 0 0 1rem 0;
    }
    @media (min-width: ${MobilebreakPoints.small}){
        font-size: 2.2rem;
    }
    @media (min-width: ${MobilebreakPoints.large}){
        text-align: start;
        margin: 0;
    }
    @media (min-width: ${DesktopBreakpoints.medium}){
        font-size: 2.2rem;
        
    }
    
`

export const HomeSectionImage = styled.img`
    @media (min-width: ${MobilebreakPoints.extraSmall}){
        height: auto;
        width: 50%; 
        max-width: 11rem;
        background-color: #d7dfe9;
        transition: background-color 0.3s ease, opacity 0.3s ease;
        border-radius: 0.2rem;
        
        &.loaded{
            background-color: transparent;
            border-radius: 0;
            opacity: 1;
        }
    }
    @media (min-width: ${MobilebreakPoints.large}){
        max-width: 45%;   
    }
    @media (min-width: ${DesktopBreakpoints.medium}){
        height: 30rem;
        width: 30rem;
        margin-top: 1rem;
    }
    
`
export const HomeSectionParagraph = styled.p`
    @media (min-width: ${MobilebreakPoints.extraSmall}){
        color:  #64748b;
        font-family: "Roboto";
        font-size: 0.8rem;
        font-weight: 500;
        text-align: center;
    }
    @media (min-width: ${MobilebreakPoints.small}){
        font-size: 1rem;
    }
    @media (min-width: ${MobilebreakPoints.large}){
        line-height: 1.4rem;
        text-align: start;
        margin: 0;
    }
    @media (min-width: ${DesktopBreakpoints.medium}){
        font-size: 1.2rem;
        line-height: 2rem;
    }
    @media (min-width: ${DesktopBreakpoints.large}){
        font-size: 1.3rem;
    }
`

export const ShopNowButton = styled.button`
    @media (min-width: ${MobilebreakPoints.extraSmall}){
        display: inline-block;
        font-family: "Roboto";
        font-size: 0.7rem;
        color: #fff;
        background-color:  #0967d2;
        border: none;
        border-radius: 0.3rem;
        cursor: pointer;
        padding: 0.5rem 1.3rem;
        width: 6.5rem;
    }
    @media (min-width: ${MobilebreakPoints.small}){
        font-size: 1rem;
        width: 8rem;
    }
    @media(min-width: ${DesktopBreakpoints.medium}){
        width: 10rem;
        padding: 0.8rem 1rem;

    }
    @media (min-width: ${DesktopBreakpoints.large}){
        padding: 1rem 1.3rem;
        font-size: 1rem;
    }
`

{/* Desktop View*/ }
export const DesktopSectionContainer = styled.section`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        display: none;
    }
    @media(min-width: ${MobilebreakPoints.large}){
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        margin-top: 5rem;
        
    }
    @media (min-width: ${DesktopBreakpoints.medium}){       
        margin-top: 5rem;
        width: 100%;
        
    }
    
`
export const DesktopDetailaContainer = styled.div`
    @media(min-width: ${MobilebreakPoints.large}){
        display: flex;
        flex-direction: column;
        align-items: flex-start ;
        justify-content: center;
        width: 60%;
        max-width: 36rem;
        gap: 1.2rem;
        
    }
    @media (min-width: ${DesktopBreakpoints.medium}){
        padding-top: 3rem;
        gap: 2rem;
    }
`
