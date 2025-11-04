import styled from "styled-components"
import { MobilebreakPoints } from "../../Breakpoints/breakpoints"


export const LoginComponentContainer = styled.div`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
`
export const LoginContainer = styled.div`
        @media(min-width: ${MobilebreakPoints.extraSmall}){
            width: 100%;
            display: flex;
            flex-direction: column; 
            height: 100%;
            justify-content: center;
            gap: 2rem;
            max-width: 18rem;
            max-height: 34rem;
        }  
        
    `

export const LoginDetailsSection = styled.div`
        @media(min-width: ${MobilebreakPoints.extraSmall}){
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem
        }
    `

export const LogInLogoImageContainer = styled.div`
        display: flex;
        justify-content: center;
    `

export const LogInLogoImage = styled.img`
        @media(min-width: ${MobilebreakPoints.extraSmall}){
            width: 100%;
            max-width: 9rem;
            display: block;
            background-color: #d7dfe9; 
            border-radius: 0.2rem;
            transition: background-color 0.3s ease, opacity 0.3s ease;
            &.loaded {
                background-color: transparent;
                border-radius: 0;
                opacity: 1; 
            }
        }
    `

export const LoginImage = styled.img`
        @media(min-width: ${MobilebreakPoints.extraSmall}){
            width: 100%;
            max-width: 16rem;
            display: block;
            background-color: #d7dfe9; 
            transition: background-color 0.3s ease, opacity 0.3s ease;
            border-radius: 0.2rem;

            &.loaded {
                background-color: transparent;
                border-radius: 0;
                opacity: 1; 
            }
        }

    `


export const LoginFormContainer = styled.form`
        @media(min-width: ${MobilebreakPoints.extraSmall}){
            display: flex;
            flex-direction: column;
            gap: 1rem;
             
    
        }
    `
export const LoginFormInputContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        
    `
export const LoginFormLabel = styled.label`
        @media(min-width: ${MobilebreakPoints.extraSmall}){
            color:  #64748b;
            font-family: "Roboto";
            font-size: 0.8rem;
            font-weight: 900;
        }
    `

export const LoginFormInput = styled.input`
        @media(min-width: ${MobilebreakPoints.extraSmall}){
            padding: 0.8rem 1.3rem;
            border: none;
            background-color: #d7dfe9;
            color: #64748b;
            border-radius: 0.2rem;
            &:focus {
                outline: none; 
                border: 1px solid #0967d2;
                box-shadow: 0 0 0 2px rgba(9, 103, 210, 0.4);
            }
            &::placeholder {
                color: #94a3b8; 
                opacity: 1; 
            }
        }
    `

export const LoginButton = styled.button`
    @media(min-width: ${MobilebreakPoints.extraSmall}){
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
export const ErrorMessage = styled.span`
    color: #ff0b37;
`
export const SuccessMessage = styled.span`
    color: #22bb33;
`