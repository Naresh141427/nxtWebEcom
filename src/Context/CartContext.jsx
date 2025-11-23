import React, { useContext, useMemo, useReducer } from "react"


const CartContext = React.createContext(undefined)

const CART_ACTION_TYPES = {
    isBouncing: "IS_BOUNCING",
    ADD_ITEM: "ADD_ITEM",
    DECREASE_ITEM: "DECREASE_ITEM",
    FILTER_ITEM: "FILTER_ITEM",
}

const cartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case CART_ACTION_TYPES.isBouncing:
            return {
                ...state,
                isBouncing: payload
            }


        case CART_ACTION_TYPES.ADD_ITEM: {
            const { item, quantityToAdd = 1 } = payload;
            const isItemInCart = state.cartItems.some(cartItem => cartItem.id === item.id);

            let newCartItems;
            if (isItemInCart) {
                newCartItems = state.cartItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd }
                        : cartItem
                );
            } else {
                newCartItems = [...state.cartItems, { ...item, quantity: quantityToAdd }];
            }
            return { ...state, cartItems: newCartItems };
        }


        case CART_ACTION_TYPES.DECREASE_ITEM: {
            const { item, quantityToChange = -1 } = payload;
            const newCartItems = state.cartItems.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + quantityToChange }
                    : cartItem
            ).filter(cartItem => cartItem.quantity > 0);

            return { ...state, cartItems: newCartItems };
        }

        case CART_ACTION_TYPES.FILTER_ITEM: {
            const { item } = payload;
            const newCartItems = state.cartItems.filter(cartItem =>
                cartItem.id !== item.id
            );
            return { ...state, cartItems: newCartItems };
        }

        default:
            return state
    }
}


const INTIAL_CART_STATE = {
    isBouncing: false,
    cartItems: [],
}



export const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, INTIAL_CART_STATE)
    const { cartItems, isBouncing } = state


    const cartTotal = useMemo(() => (
        cartItems.reduce((acc, currentItem) => acc + (currentItem.price * currentItem.quantity), 0)
    ), [cartItems])



    const triggerBounce = () => {
        dispatch({ type: CART_ACTION_TYPES.isBouncing, payload: true })
        setTimeout(() => dispatch({ type: CART_ACTION_TYPES.isBouncing, payload: false }), 300)
    }

    const addItemsToTheCart = (item, quantityToAdd = 1) => {
        dispatch({ type: CART_ACTION_TYPES.ADD_ITEM, payload: { item, quantityToAdd } });
        triggerBounce()
    }

    const decreaseItemsQuantity = (item) => {
        dispatch({ type: CART_ACTION_TYPES.DECREASE_ITEM, payload: { item } });
    }

    const filterCartItems = item => {
        dispatch({ type: CART_ACTION_TYPES.FILTER_ITEM, payload: { item } });
    }


    return (
        <CartContext.Provider value={{ cartItems, addItemsToTheCart, decreaseItemsQuantity, cartTotal, filterCartItems, isBouncing, triggerBounce }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) throw new Error("useCart must be used within an AuthProvider")
    return context
}