
import styled from "styled-components"
import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints"

export const CategoriesHeader = styled.h1`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        color: #0f172a;
        font-size: 1rem;
        font-weight: 900;
        margin: 0;
        
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    @media(min-width:${MobilebreakPoints.large}){
            font-size: 1.2rem;
        }
    @media(min-width:${DesktopBreakpoints.medium}){
            font-size: 1.5rem;
    }
`

export const CategoriesList = styled.ul`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        margin: 0.5rem 0;
        gap: 0.3rem;
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        gap: 0.5rem;   
    }
`

export const CategoriesListItem = styled.li`

    @media(min-width: ${MobilebreakPoints.extraSmall}){
        color:  #64748b;
        font-weight: 500;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        
    }
     @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.3rem;
    }
    @media(min-width:${MobilebreakPoints.large}){
        font-size: 1rem;
    }
    @media(min-width:${DesktopBreakpoints.medium}){
            font-size: 1.3rem;
    }
    &:hover {
    color: #0f172a;
  }
  &.selected{
    font-weight: 900;
  }
  
`