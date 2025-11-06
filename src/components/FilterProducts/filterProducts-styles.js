
import styled from "styled-components"
import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints"

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media(min-width: ${MobilebreakPoints.medium}){
        gap: 1.5rem;
    }
`
export const FilterContainer = styled.div`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        display: flex;
        flex-direction: column;
    
    }
`



export const CategoriesContainer = styled.div`
    @media(min-width: ${MobilebreakPoints.extraSmall}){ 
        display: flex;
        flex-direction: column;
        

    }
`
export const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ClearFiltersButton = styled.button`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        display: inline;
        font-size: 1rem;
        font-weight: 500;
        color: #0967d2;
        border:0.05rem solid  #0967d2;
        border-radius: 0.2rem;
        background-color: transparent;
        cursor: pointer;
        margin-top: 1rem;
        align-self: flex-start;
        padding: 0.3rem 1rem;;
    }
    &:hover{
        background-color: #0967d2;
        color: white;
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.3rem;
    }
    @media(min-width: ${MobilebreakPoints.large}){
        font-size: 1.1rem;
    }
    
`