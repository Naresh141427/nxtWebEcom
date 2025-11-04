import styled from "styled-components"

import { DesktopBreakpoints, MobilebreakPoints } from "../../Breakpoints/breakpoints"

export const Container = styled.div`
  @media(min-width: ${MobilebreakPoints.extraSmall}){
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    padding:0 1.3rem;
  }
  @media(min-width: ${MobilebreakPoints.large}){
    padding: 0 3rem ;
  }
  @media(min-width: ${DesktopBreakpoints.medium}){
    padding: 0 10rem;
  }
`
