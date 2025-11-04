import { CiSearch } from "react-icons/ci";
import styled from "styled-components"
import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints"

export const SearchContainer = styled.div`
    @media(min-width: ${MobilebreakPoints.extraSmall}){

        display: inline-flex;
        align-items: center;
        margin-right: 0.6px;
        border-radius: 0.7rem;
        padding: 0.6rem;
        background-color:  #f1f5f9;
    }
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        justify-content: space-between;
    }
`

export const SearchInput = styled.input`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        background-color: transparent;
        color: #475569;
        font-size: 1rem;
        border: none;
        outline: none;
        width: 93%;

    }
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.4rem;
    }
    @media(min-width:${MobilebreakPoints.large}){
        font-size: 1.2rem;
    }
    @media(min-width:${DesktopBreakpoints.medium}){
        font-size: 1.4rem;
    }

`

export const SearchIcon = styled(CiSearch)`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        font-size: 1rem;
        color: #475569; 
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.6rem;
    }
    @media(min-width:${MobilebreakPoints.large}){
        font-size: 1.2rem;
    }
    @media(min-width:${DesktopBreakpoints.medium}){
        font-size: 1.5rem;
    }
`