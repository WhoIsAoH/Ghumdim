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

    //Total Favourite Destinations
    const getTotalFavDestinations = () => {
        let totalDestination = 0;
        for (const item in favouriteItems) {
            if (favouriteItems[item] > 0) {
                totalDestination += favouriteItems[item];
            }
        }
        return totalDestination
    }

    const contextValue = { all_destination, favouriteItems, addToFavourite, removeFromFavourite, getTotalFavDestinations };

    return (
        <DestinationContext.Provider value={contextValue}>
            {props.children}
        </DestinationContext.Provider>

    )
}

export default DestinationContextProvider;