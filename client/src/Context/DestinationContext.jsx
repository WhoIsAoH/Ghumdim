import React, { createContext, useState } from "react";
import all_destination from '../Components/Assets/alldestination';

export const DestinationContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_destination.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const DestinationContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    // add to cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems);
    }
    // remove from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const contextValue = { all_destination, cartItems, addToCart, removeFromCart };

    return (
        <DestinationContext.Provider value={contextValue}>
            {props.children}
        </DestinationContext.Provider>

    )
}

export default DestinationContextProvider;