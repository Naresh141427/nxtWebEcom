import React, { useContext, useState } from "react"


const CartContext = React.createContext({
    cartItems: [],
    addItemsToTheCart: () => { }
})

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addItemsToTheCart = (item) => {
        const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(prevItems =>
                prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
        }
    }

    return (
        <CartContext.Provider value={{ cartItems, addItemsToTheCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)