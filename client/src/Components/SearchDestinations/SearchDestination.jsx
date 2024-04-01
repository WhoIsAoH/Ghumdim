import React, { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
// import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Items/Item'

const SearchDestination = (props) => {

    const [alldestination, setAllDestination] = useState({});
    const [searchQuery, setSearchQuery] = useState("");
    const [rating, setRating] = useState(0); // State to store the rating
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Function to fetch search results
        const fetchSearchResults = async () => {
            try {
                const response = await Axios.get(`http://localhost:8080/ghumdim/viewDestination/cosearch/${searchQuery}`);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        // Fetch search results only if there's a search query
        if (searchQuery.trim() !== "") {
            fetchSearchResults();
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    // const { addToFavourite } = useContext(DestinationContext);

    // Function to render star icons based on rating
    // const renderStars = () => {
    //     const stars = [];
    //     const roundedRating = Math.round(rating * 2) / 2; // Round the rating to the nearest half
    //     for (let i = 0; i < 5; i++) {
    //         if (i < roundedRating - 0.5) {
    //             stars.push(<FaStar style={{ color: '#FF4141' }} size={20} key={i} />);
    //         } else if (i === Math.floor(roundedRating) && roundedRating % 1 !== 0) {
    //             stars.push(<FaStarHalfAlt style={{ color: '#FF4141' }} size={20} key={i} />);
    //         } else {
    //             stars.push(<FaRegStar style={{ color: '#FF4141' }} size={20} key={i} />);
    //         }
    //     }
    //     return stars;
    // };

    return (
        <div className='destination-category'>
            {/* <div className='destiantioncategory-indexSort'>
                <p>
                    <span>Showing 1-12</span> out of 36 destinations
                </p>
                <div className="destinationcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div> */}
            <div className="destinationcategory-places">

                {searchResults.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} photo={item.photo} address={item.address} status={item.status} />
                })}


            </div>

        </div>
    );
}
export default SearchDestination;