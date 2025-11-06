import styled from "styled-components"
import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints"

export const ProductsContainer = styled.div`
  
  @media(min-width: ${MobilebreakPoints.extraSmall}){
    width: 100%;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    gap: 2rem;
  }
  @media(min-width: ${MobilebreakPoints.large}){
    flex-direction: row;
    justify-content: flex-start;
    gap:  7rem; 
  }
  
  
`

export const AllProductsContainer = styled.div`
  @media(min-width: ${MobilebreakPoints.extraSmall}){
    display: flex;
    flex-direction: column;
  }
`
export const ProductsListContainer = styled.ul`
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
export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

