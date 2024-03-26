import React, { createContext, useState, useEffect } from "react";
import all_destination from '../Components/Assets/alldestination';
import Axios from 'axios'

export const DestinationContext = createContext(null);



// const getDefaultFavourite = () => {
//     let favourite = {};
//     for (let index = 0; index < all_destination.length + 1; index++) {
//         favourite[index] = 0;
//     }
//     return favourite;
// }

const DestinationContextProvider = (props) => {

    const [alldestination, setAllDestination] = useState([]);
    const [favouriteItems, setFavouriteItems] = useState(getDefaultFavourite());

    // getDefaultFavourite function to initialize favouriteItems
    // const getDefaultFavourite = (allDestinations) => {
    //     let favourite = {};
    //     allDestinations.forEach(destination => {
    //         favourite[destination.id] = 0;
    //     });
    //     return favourite;
    // }

    // const [favouriteItems, setFavouriteItems] = useState(getDefaultFavourite(alldestination));
    useEffect(() => {
        Axios.get("http://localhost:8080/ghumdim/viewAllDestination").then((res) => {
            console.log(res.data);
            setAllDestination(res.data);
        })
            .catch((error) => {
                console.error('error fetching data', error);
            });
    }, []);

    // Function to initialize favourite items based on all destinations
    function getDefaultFavourite() {
        let favourite = {};
        all_destination.forEach(destination => {
            favourite[destination.id] = 0;
        });
        return favourite;
    }

    // add to cart
    const addToFavourite = (itemId) => {
        setFavouriteItems((prev) => {
            const updatedFavourites = { ...prev, [itemId]: prev[itemId] + 1 };
            return updatedFavourites;
        });
    }

    // remove from cart
    const removeFromFavourite = (itemId) => {
        setFavouriteItems((prev) => {
            if (prev[itemId] > 0) {
                const updatedFavourites = { ...prev, [itemId]: prev[itemId] - 1 };
                return updatedFavourites;
            }
            return prev;
        });
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

    const contextValue = { alldestination, favouriteItems, addToFavourite, removeFromFavourite, getTotalFavDestinations };

    return (
        <DestinationContext.Provider value={contextValue}>
            {props.children}
        </DestinationContext.Provider>
    )
}

export default DestinationContextProvider;

// import React, { createContext, useState } from "react";
// import all_destination from '../Components/Assets/alldestination';

// export const DestinationContext = createContext(null);

// const getDefaultFavourite = () => {
//     let favourite = {};
//     for (let index = 0; index < all_destination.length + 1; index++) {
//         favourite[index] = 0;
//     }
//     return favourite;
// }

// const DestinationContextProvider = (props) => {

//     const [favouriteItems, setFavouriteItems] = useState(getDefaultFavourite());

//     // add to cart
//     const addToFavourite = (itemId) => {

//         setFavouriteItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
//         // console.log(favouriteItems);
//     }

//     // remove from cart
//     const removeFromFavourite = (itemId) => {
//         setFavouriteItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
//     }

//     //Total Favourite Destinations
//     const getTotalFavDestinations = () => {
//         let totalDestination = 0;
//         for (const item in favouriteItems) {
//             if (favouriteItems[item] > 0) {
//                 totalDestination += favouriteItems[item];
//             }
//         }
//         return totalDestination
//     }

//     const contextValue = { favouriteItems, addToFavourite, removeFromFavourite, getTotalFavDestinations };

//     return (
//         <DestinationContext.Provider value={contextValue}>
//             {props.children}
//         </DestinationContext.Provider>
//     )
// }

// export default DestinationContextProvider;