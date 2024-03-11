import React, { createContext, useState } from "react";
import all_destination from '../Components/Assets/alldestination';

export const DestinationContext = createContext(null);

const getDefaultFavourite = () => {
    let favourite = {};
    for (let index = 0; index < all_destination.length + 1; index++) {
        favourite[index] = 0;
    }
    return favourite;
}

const DestinationContextProvider = (props) => {

    const [favouriteItems, setFavouriteItems] = useState(getDefaultFavourite());

    // add to cart
    const addToFavourite = (itemId) => {
        setFavouriteItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(favouriteItems);
    }
    // remove from cart
    const removeFromFavourite = (itemId) => {
        setFavouriteItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const contextValue = { all_destination, favouriteItems, addToFavourite, removeFromFavourite };

    return (
        <DestinationContext.Provider value={contextValue}>
            {props.children}
        </DestinationContext.Provider>

    )
}

export default DestinationContextProvider;