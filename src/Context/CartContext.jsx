import React, { useContext, useState } from "react"


const CartContext = React.createContext({
    cartItems: [],
    addItemsToTheCart: () => { }
})

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCatItems] = useState([])

    const addItemsToTheCart = (item) => {
        setCatItems([...cartItems, item])
    }

    return (
        <CartContext.Provider value={{ cartItems, addItemsToTheCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)