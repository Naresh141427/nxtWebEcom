import { Link } from "react-router-dom"
import styled from "styled-components";

import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints";

export const NavHeader = styled.header`
  @media(min-width: ${MobilebreakPoints.extraSmall}){
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    background-color: #fff;
    box-shadow: 0px 0.1px 4px 0px #bfbfbf;
  }
  
  @media(min-width: ${MobilebreakPoints.large}){
    padding: 0 3rem;
  }
  @media(min-width: ${DesktopBreakpoints.medium}){
    padding: 0.5rem 10rem;
  }
`
export const NavbarLogo = styled.img`
  
  background-color: #d7dfe9;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  border-radius: 0.2rem;
  &.loaded{
      background-color: transparent;
      border-radius: 0;
      opacity: 1;
  }
  @media(min-width: ${MobilebreakPoints.extraSmall}){
    height: 1.5rem;
    width: auto;
    
  }
  @media(min-width: ${MobilebreakPoints.small}){
    height: 2rem
  }
  @media(min-width: ${DesktopBreakpoints.medium}){
    max-height: 100px;

  }
 `

// {/* Mobile Design Styles */ }

export const MobileNav = styled.nav`
  
  @media(min-width: ${MobilebreakPoints.extraSmall}){
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding-left: 1.3rem;
      padding-right: 1.3rem;
      padding-top: 1.3rem;  
    }
  @media(min-width:${MobilebreakPoints.large}){
    display: none;
  }
`
export const MobileIcon = styled.img`
  
  @media(min-width: ${MobilebreakPoints.extraSmall}){
     display: inline;
      height: 1.7rem;
      width: 1.7rem;
  }
  @media(min-width: ${MobilebreakPoints.small}){
      height: 2rem;
      width: auto
  }
  background-color: #d7dfe9;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  border-radius: 0.2rem;
  &.loaded{
      background-color: transparent;
      border-radius: 0;
      opacity: 1;
  }
`
export const MobileNavMenu = styled.ul`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:  #e6f6ff;
  list-style: none;
  padding: 1rem 2.3rem;
  margin: 0;
  @media(min-width: ${MobilebreakPoints.small}){
    padding: 1rem 3rem;
  }
  @media(min-width: ${MobilebreakPoints.large}){
    display: none;
  }

`
export const MobileNavLink = styled(Link)`
  @media(min-width: ${MobilebreakPoints.extraSmall}){
    display: inline; 
    text-decoration: none;
  }
`

// desktop and extra large
export const Navbar = styled.nav`
  display: none;
  @media(min-width: ${MobilebreakPoints.large}){
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
 
 `

export const NavMenu = styled.ul`
  @media(min-width: ${MobilebreakPoints.large}){
    display: flex;
    align-items:center;
    gap: 2rem;
    list-style: none;
  }

`
export const NavMenuLinks = styled(Link)`
  @media(min-width: ${MobilebreakPoints.large}){
    font-family: "Roboto";
    font-size: 1.2rem;
    color:    #64748b;
    font-weight: 600;
    text-decoration: none;
  }
  @media(min-width: ${DesktopBreakpoints.medium}){
    font-size: 1.3rem;

  }
`

export const NavButton = styled.button`
@media(min-width: ${MobilebreakPoints.large}){
    display: inline-block;
    font-family: "Roboto";
    font-size: 1rem;
    color: #fff;
    background-color:  #0967d2;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    padding: 0.5rem 1.3rem;
}
`