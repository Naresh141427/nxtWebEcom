import styled from "styled-components"

import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints"



export const SummaryTitle = styled.h1`
  width: 100%;
  color: #0f172a;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 900;
  text-ailgn: start;
  @media(min-width: ${DesktopBreakpoints.large}){
    width: 70%;
  }
`

export const CartContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  gap: 1rem;
  padding: 0;
  margin-bottom: 8rem;
  @media(min-width: ${DesktopBreakpoints.large}){
    align-items: center;
  }
`

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem 2.3rem;

@media(min-width: ${DesktopBreakpoints.medium}){
    padding: 0.5rem 10rem;

  } 

`

export const EmptyCartcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 3rem;
`

export const EmptyCartHeader = styled.h1`
  color: #0f172a;
  font-size: 1rem;
  margin: 0;
  @media(min-width: ${MobilebreakPoints.small}){
    font-size: 1.1rem;
  }
  @media(min-width: ${MobilebreakPoints.large}){
    font-size: 1.3rem;
  }
`
export const EmptyCartDescription = styled.p`
  color:  rgba(8, 8, 8, 0.83);
  font-size: 1rem;
  margin: 0;  
  text-align: center;
  @media (min-width: ${MobilebreakPoints.small}){
      font-size: 1.1rem
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
        font-size: 0.9rem;
        width: 7rem;
    }
    @media(min-width: ${DesktopBreakpoints.medium}){
        padding: 0.8rem 1rem;

    }
    
`

export const CartTotalHeading = styled.h1`
  color: #0f172a;
  font-size:1rem;
  font-weight: 600;
  font-style: italic;
  text-align: start;
  @media (min-width: ${MobilebreakPoints.large}){
        font-size: 1.1rem;
    }
  @media(min-width: ${DesktopBreakpoints.large}){
    width: 60%;
    font-size: 1.3rem;
  }
`
export const EmptyCartImage = styled.img`
    height: 200px;
    width: auto;
  `