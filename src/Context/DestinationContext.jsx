import React, { createContext } from "react";
import all_destination from '../Components/Assets/alldestination';

export const DestinationContext = createContext(null);

const DestinationContextProvider = (props) => {

    const contextValue = { all_destination };

    return (
        <DestinationContext.Provider value={contextValue}>
            {props.children}
        </DestinationContext.Provider>

    )
}

export default DestinationContextProvider;