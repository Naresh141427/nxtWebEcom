import styled from "styled-components"
import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints"

export const SimilarProductsContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    gap: 1.2rem;
    @media (min-width: ${MobilebreakPoints.medium}){
        font-size: 1.5rem
    }
`

export const SimilarProductsTitle = styled.h2`
    color:#171f46;
    font-size: 1.2rem;
    margin-bottom: 0;
    @media (min-width: ${MobilebreakPoints.medium}){
        font-size: 1.5rem
    }
`
