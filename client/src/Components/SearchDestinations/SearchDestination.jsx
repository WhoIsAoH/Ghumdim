// import React, { useContext, useEffect, useState } from 'react';
// import Axios from 'axios';
// // import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
// import dropdown_icon from '../Assets/dropdown_icon.png'
// import Item from '../Items/Item'

// const SearchDestination = (props) => {

//     // const [alldestination, setAllDestination] = useState({});
//     const [searchQuery, setSearchQuery] = useState("");
//     // const [rating, setRating] = useState(0); // State to store the rating
//     const [searchResults, setSearchResults] = useState([]);

//     useEffect(() => {
//         // Function to fetch search results
//         const fetchSearchResults = async () => {
//             try {
//                 const response = await Axios.get(`http://localhost:8080/ghumdim/viewDestination/cosearch/${searchQuery}`);
//                 setSearchResults(response.data);
//             } catch (error) {
//                 console.error('Error fetching search results:', error);
//             }
//         };

//         // Fetch search results only if there's a search query
//         if (searchQuery.trim() !== "") {
//             fetchSearchResults();
//         } else {
//             setSearchResults([]);
//         }
//     }, [searchQuery]);



//     return (
//         <div className='destination-category'>
//             <div className="destinationcategory-places">

//                 {searchResults.map((item, i) => {
//                     return <Item key={i} id={item.id} name={item.name} photo={item.photo} address={item.address} status={item.status} />
//                 })}


//             </div>

//         </div>
//     );
// }
// export default SearchDestination;

import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Item from '../Items/Item';

const SearchDestination = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await Axios.get(`http://localhost:8080/ghumdim/viewDestination/cosearch/${searchQuery}`);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        if (searchQuery.trim() !== "") {
            fetchSearchResults();
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    return (
        <div className='destination-category'>
            <div className="destinationcategory-places">
                {searchResults.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        photo={item.photo}
                        address={item.address}
                        status={item.status}
                    />
                ))}
            </div>
        </div>
    );
}

export default SearchDestination;
