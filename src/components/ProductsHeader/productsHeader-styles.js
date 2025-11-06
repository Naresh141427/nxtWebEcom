import styled from "styled-components"
import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints"


export const ProductHeaderContainer = styled.div`
  @media(min-width: ${MobilebreakPoints.extraSmall}){
      display: flex; 
      justify-content: space-between;
      align-items: center;

  }
  @media(min-width:${MobilebreakPoints.large}){
        margin-bottom: 0.5rem;
        min-width: 29rem;
    }
  @media(min-width: ${DesktopBreakpoints.medium}){
    min-width: 32rem;
  }
`

export const ProductsHeader = styled.h1`
@media(min-width: ${MobilebreakPoints.extraSmall}){
  font-size: 1rem;
  color:  #475569;
  margin: 0;
  text-align: start;
}
@media(min-width: ${MobilebreakPoints.medium}){
  font-size: 1.5rem;
}
@media(min-width:${MobilebreakPoints.large}){
        font-size: 1.2rem;
    }
@media(min-width: ${DesktopBreakpoints.medium}){
  font-size: 1.5rem;
}
`