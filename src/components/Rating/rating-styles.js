import styled from "styled-components";
import { FaStar } from "react-icons/fa";

import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints";

export const RatingContainer = styled.div`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        display: flex;
        flex-direction: column; 
        justify-content: center;
        gap: 0.5rem; 
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        gap: 1rem;
    }
`;

export const RatingHeader = styled.h1`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        color: #0f172a;
        font-size: 1rem;
        font-weight: 900;
        margin: 0;
    
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.5rem;
    }
    @media(min-width:${MobilebreakPoints.large}){
        font-size: 1.2rem;
    }
    @media(min-width:${DesktopBreakpoints.medium}){
                font-size: 1.5rem;
    }
    
`

export const StarContainer = styled.div`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
         display: flex;
        align-items: center;
        gap: 0.5rem; 
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        gap: 0  0.8rem;
    }
`

export const StarIcon = styled(FaStar)`
    color: #ccc;
    fill: #ccc;
    cursor: pointer;
    transition: all 0.2s ease; 

   
    &.active {
        color: #f39c12;
        fill: #f39c12;
    }

    @media(min-width: ${MobilebreakPoints.extraSmall}){
        font-size: 1rem;
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.3rem;
    }
    @media(min-width:${MobilebreakPoints.large}){
        font-size: 1rem;
    }
    @media(min-width:${DesktopBreakpoints.medium}){
                font-size: 1.5rem;
    }
`;