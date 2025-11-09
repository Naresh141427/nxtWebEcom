import styled from "styled-components"

import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints"



export const SummaryTitle = styled.h1`
  width: 100%;
  color: #0f172a;
  font-size: clamp(1.2rem, 2vw, 2rem);
  font-weight: 900;
  text-ailgn: start;

`

export const CartContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  gap: 1rem;
  padding: 0;
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