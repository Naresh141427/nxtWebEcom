import React, { useContext, useMemo, useState } from "react"


const CartContext = React.createContext({
    cartItems: [],
    addItemsToTheCart: () => { },
    decreaseItemsQuantity: () => { },
    cartTotal: 0
})


export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const cartTotal = useMemo(() => {
        return cartItems.reduce((acc, currentItem) => acc + (currentItem.price * currentItem.quantity), 0)
    }, [cartItems])
    const addItemsToTheCart = (item, quantityToAdd = 1) => {
        const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(prevItems =>
                prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd }
                        : cartItem
                )
            );
        } else {
            setCartItems(prevItems => [...prevItems, { ...item, quantity: quantityToAdd }]);
        }
    }

    const decreaseItemsQuantity = (item) => {
        const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id)
        if (isItemInCart) {
            setCartItems(prevCartItems =>
                prevCartItems.map(cartItem =>
                    cartItem.id === item.id ? ({ ...cartItem, quantity: cartItem.quantity - 1 })
                        : cartItem
                ).filter(cartItem => cartItem.quantity > 0)
            )
        }
    }



    return (
        <CartContext.Provider value={{ cartItems, addItemsToTheCart, decreaseItemsQuantity, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)