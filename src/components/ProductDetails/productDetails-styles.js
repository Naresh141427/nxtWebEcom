
import styled from "styled-components"
import { FaStar } from "react-icons/fa";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

import { MobilebreakPoints, DesktopBreakpoints } from "../../Breakpoints/breakpoints"



export const ProductDetailsContainer = styled.div`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    display: flex;
    flex-direction: column;
    padding: 0.3rem 1.4rem;
    margin-top: 2rem;
  }
  @media (min-width: ${MobilebreakPoints.large}){
    margin-top: 3rem;   
    gap: 2rem
    
    
  }
  @media (min-width: ${DesktopBreakpoints.medium}){
    margin-top: 3rem;
    gap: 3rem;
    height: 100vh;
    padding: 0 10rem;
    
  }

`
export const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: ${MobilebreakPoints.large}){
      flex-direction: row;
      align-items: center;
      gap: 3rem;
    }
`
export const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProductImageContainer = styled.div`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    display: flex;
    flex-direction: column;
    height: 100%;
    
  }
 
  @media (min-width: ${MobilebreakPoints.large}){
    align-items: space-around;
  }

`
export const ProductImage = styled.img`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    height: 100%;
    width: 100%;
    max-width: 20rem;
    max-height: 20rem;
    border-radius: 0.6rem;  

  }
  
  @media (min-width: ${MobilebreakPoints.large}){
    margin-bottom: 1.3rem;
  }

`
export const ProductDescriptionContainer = styled.div`
@media (min-width: ${MobilebreakPoints.small}){
     display: flex;
    flex-direction: column;
    ${'' /* max-width:70%; */}

}

  @media (min-width: ${MobilebreakPoints.large}){
    ${'' /* width: 60%; */}
    max-width: 20rem;
  }

`

export const ProductTitle = styled.h2`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    color: #12022f;
    font-size: 1.2rem;
    font-weight: 900;
  }
  @media (min-width: ${MobilebreakPoints.large}){
    margin-top: 0;
  }
  @media (min-width: ${MobilebreakPoints.medium}){
    font-size: 1.7rem;
    
  }
  
`
export const ProductPrice = styled.p`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    color: #12022f;
    font-size: 1.1rem;
    font-weight: 900;
    margin: 0;
  }
  @media (min-width: ${MobilebreakPoints.medium}){
    font-size: 1.3rem;
    
  }
  @media (min-width: ${DesktopBreakpoints.medium}){
    font-size: 1.3rem;
    
  }
`

export const ProductReviewContainer = styled.div`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    display: flex;
    gap: 0.7rem;
    align-items: center;
    margin: 1rem 0;
    
  }
`
export const ProductRatingContainer = styled.div`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    
    background-color: #3b82f6;
    border: none;
    border-radius: 0.3rem;
    height: 30px;
    width: 70px;

  } 
`
export const ProductRating = styled.span`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    color: white;
    font-size: 1rem;
  }
  @media (min-width: ${DesktopBreakpoints.medium}){
    font-size: 1.2rem;
    
  }
`
export const StarIcon = styled(FaStar)`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    font-size: 0.9rem;
    color: white;
  }
`
export const ProductReview = styled.span`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    color:  #171f46;
    font-size: 1rem;
  }
  
  
`
export const ProductDescription = styled.p`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    color:  #475569;
    font-size: 1rem;
    margin-top: 0;
  }
  @media (min-width: ${MobilebreakPoints.medium}){
    font-size: 1.2rem;
    
  }
  @media (min-width: ${DesktopBreakpoints.medium}){
    font-size: 1.1rem;
    line-height:1.58rem;
    
  }
`
export const Avialability = styled.div`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    color: #12022f;
    font-size: 1rem;
    font-weight: 600;
    margin: 0.3rem 0;
  }
  @media (min-width: ${MobilebreakPoints.medium}){
    font-size: 1.2rem;
    
  }
  @media (min-width: ${DesktopBreakpoints.medium}){
    font-size: 1.1rem;
    
  }
`
export const SpecialText = styled.span`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    color:  #616e7c;
    font-size: 0.9rem;
    margin-left: 0.4rem;
    font-weight: 900;
  } 
  @media (min-width: ${DesktopBreakpoints.medium}){
    font-size: 1rem;
    
  }
`
export const HorizontalRule = styled.hr`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    color: #616e7c ;
    width: 100%;
    margin: 0.8rem 0;

  }
`
export const AddTOCartContainer = styled.div`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 40%;
    max-width: 8rem;
    margin-bottom: 1rem;
  }
  @media (min-width: ${DesktopBreakpoints.medium}){
    margin-top: 1rem;
    
  } 
`
export const QuantityControlContainer = styled.div`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    padding: 0 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const Quantity = styled.span`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    color: #475569;
    font-size: 1rem;
    
  }
  @media (min-width: ${DesktopBreakpoints.medium}){
    font-size: 1.5rem;
    
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

export const AddToCartButton = styled.button`
  @media (min-width: ${MobilebreakPoints.extraSmall}){
    color:  white;
    font-size: 0.7rem;
    border: none;
    border-radius: 0.2rem;
    background-color: #3b82f6;
    padding: 0.5rem;
    cursor: pointer;
  }
  @media (min-width: ${DesktopBreakpoints.medium}){
    padding: 0.7rem;
    font-size: 0.8rem
    
  }
`



















































