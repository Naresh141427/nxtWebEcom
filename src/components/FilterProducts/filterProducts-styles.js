
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