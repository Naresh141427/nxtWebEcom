import styled from "styled-components"
import { FaStar } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints"

export const Container = styled.li`
position: relative;
    display: flex;
    gap: 1.5rem; 
    border-radius: 0.5rem;
    box-shadow: 0px 0.1px 4px 0px #bfbfbf;  
    padding: 1rem 0.4rem;
    @media(min-width: ${MobilebreakPoints.small}){
        padding: 1rem 0.5rem;
    }
  @media(min-width: ${MobilebreakPoints.medium}){
    padding: 1rem 3rem;
  } 
  @media(min-width: ${DesktopBreakpoints.medium}){
    max-width: 70%;
  } 
  @media(min-width: ${DesktopBreakpoints.large}){
    width: 60%;
  } 
`

export const ProductImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 10rem;
    gap: 0.6rem;
    @media(min-width: ${MobilebreakPoints.medium}){ 
        gap: 0.5rem;
    }
`

export const ProductImage = styled.img`
    height: auto;
    max-width: 100%;
    border-radius: 0.4rem;
`
export const QuantityControlContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    @media(min-width: ${MobilebreakPoints.small}){
        gap: 0.5rem;
    }
    
`


export const QuantityTitle = styled.span`
    color: #12022f;
    font-size:0.77rem;
    @media(min-width: ${MobilebreakPoints.small}){
        font-size: 1.2rem;
    }
 
`

export const CartProductDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 50%;
    @media(min-width: ${MobilebreakPoints.small}){
        gap: 1rem;
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        gap: 1.6rem;
    }
`
export const CartProductDetailsTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`

export const CartProductTitle = styled.span`
   color: #12022f;
    font-size:0.9rem;
    @media(min-width: ${MobilebreakPoints.small}){
        font-size: 1.1rem;
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 1.1rem
    }
   
`
export const CartProductBrand = styled.span`
    color: #616e7c;
    font-size:0.69rem;
    @media(min-width: ${MobilebreakPoints.small}){
        font-size: 0.8rem
    }
    @media(min-width: ${MobilebreakPoints.medium}){
        font-size: 0.9rem
    }
   
`

export const CartProductRatingContainer = styled.div`
    display: flex;
    align-items: center;
    height: 20px;
    width: 90%;
    gap: 0.4rem;
    @media(min-width: ${MobilebreakPoints.small}){
        font-size: 1.3rem
    }
`
export const CartProductRatingBox = styled.span`
    display: flex;
    align-items: baseline;
    border: none;
    gap: 0.2rem;
    border-radius: 0.3rem;
`
export const StarIcon = styled(FaStar)`
    font-size:0.7rem;
    color: #fae100ff;
    @media(min-width: ${MobilebreakPoints.small}){
        font-size: 1rem
    }
    
`

export const CartProductRating = styled.span`
    color: #12022f;
    font-size:0.7rem;
    @media(min-width: ${MobilebreakPoints.small}){
        font-size: 1.1rem
    }
    
    
`

export const CartProductReviewContainer = styled.div`
    display: flex;
    align-items: center;
`
export const CartProductReview = styled.span`
    color:  #171f46;;
    font-size:0.7rem;
    @media(min-width: ${MobilebreakPoints.small}){
        font-size: 0.9rem
    }
    
`

export const CartPriceContainer = styled.div`
    
`
export const CartProductPrice = styled.span`
    color: #12022f;
    font-size:0.9rem;
    @media(min-width: ${MobilebreakPoints.small}){
        font-size: 1.1rem
    }
    
   
`

export const TotalPriceOfEachItem = styled.span`
    position: relative;
     display: inline;
    font-style: italic;
    font-weight: 500;
    font-size: 0.87rem;
    margin-top: 0.4rem;
     @media(min-width: ${MobilebreakPoints.small}){
       font-size: 1rem;
    }
     @media(min-width: ${MobilebreakPoints.medium}){
       font-size: 1.1rem;
       margin: 0;
    }
`

export const CloseIcon = styled(RiCloseCircleFill)`
    font-size: 1rem;
    color: #171f46;
    position: absolute;
    right: 0.7rem;
    top: 0.3rem;
    cursor: pointer;
    @media(min-width: ${MobilebreakPoints.small}){
        font-size: 1.6rem;

    }
   
`
export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1rem;
  width: 1rem;
  border-radius: 0.2rem;
  border: 1px solid #616e7c;
  @media (min-width: ${DesktopBreakpoints.large}){
    height: 1.3rem;
    width: 1.3rem;
    
  }
`

export const DecreaseQuantity = styled(IoMdRemove)`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    color:  #616e7c;
    font-size: 1rem;
    cursor: pointer;
  }
  @media (min-width: ${DesktopBreakpoints.medium}){
    font-size: 1.5rem;
    
  }
`
export const IncreaseQuanity = styled(IoMdAdd)`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    color:  #616e7c;
    font-size: 1rem;
    cursor: pointer;
  }
  @media (min-width: ${DesktopBreakpoints.medium}){
    font-size: 1.5rem;
    
  }
`