import styled from "styled-components"
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa"
import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints"


export const SortContainer = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem
`

export const StyledFaSortAmountUp = styled(FaSortAmountUp)`
    @media(min-width:${MobilebreakPoints.extraSmall}){
        font-size: 0.7rem;
        color:  #475569
    }
    @media(min-width:${MobilebreakPoints.small}){
        font-size: 1rem;
    }
    @media(min-width:${MobilebreakPoints.medium}){
        font-size: 1.4rem;
    }
`
export const StyledFaSortAmountDown = styled(FaSortAmountDown)`
    @media(min-width:${MobilebreakPoints.extraSmall}){
        font-size: 0.7rem;
        color:  #475569
    }
    @media(min-width:${MobilebreakPoints.small}){
        font-size: 1rem;
    }
    @media(min-width:${MobilebreakPoints.medium}){
        font-size: 1.4rem;
    }
`
export const SortByText = styled.span`
    @media(min-width:${MobilebreakPoints.extraSmall}){
        display: inline-block;  
        font-size: 0.97rem;
        color:  #475569;
    }
    @media(min-width:${MobilebreakPoints.small}){
        font-size: 1rem;
    }
    @media(min-width:${MobilebreakPoints.medium}){
        font-size: 1.4rem;
    }
    @media(min-width:${MobilebreakPoints.large}){
        font-size: 1.2rem;
    }
    @media(min-width:${DesktopBreakpoints.medium}){
        font-size: 1.4rem;
    }
`


export const PriceLabel = styled.label`
    @media(min-width:${MobilebreakPoints.extraSmall}){
        display: none;
        color:  #475569;
    }
    @media(min-width:${MobilebreakPoints.small}){
        display: block;
        font-size: 1rem;
    }
    @media(min-width:${MobilebreakPoints.medium}){
        font-size: 1.4rem;
    }
    @media(min-width:${MobilebreakPoints.large}){
        font-size: 1.2rem;
    }
    @media(min-width:${DesktopBreakpoints.medium}){
        font-size: 1.5rem;
    }
`

export const PriceComboxContainer = styled.div`
    @media(min-width:${MobilebreakPoints.extraSmall}){
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0.8rem;
        width: 60%;
    }
    @media(min-width:${MobilebreakPoints.small}){
        gap: 1rem;
    }

`
export const PriceCombox = styled.select`
    @media(min-width:${MobilebreakPoints.extraSmall}){
        font-size: 0.8rem;
        color: #1e293b;
        cursor: pointer;    
        background-color: transparent;
        border-radius: 0.3rem;
        outline: none;
        padding: 0.3rem;
    
    }
    @media(min-width:${MobilebreakPoints.small}){
        font-size: 1rem;
    }
    @media(min-width:${MobilebreakPoints.medium}){
        font-size: 1.2rem;
    }
    @media(min-width:${MobilebreakPoints.large}){
        font-size: 1.2rem;
    }
    @media(min-width:${DesktopBreakpoints.medium}){
        font-size: 1.3rem;
    }
`
export const PriceComboxOptions = styled.option`
    cursor: pointer;
    
`