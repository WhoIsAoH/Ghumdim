

import React, { useContext, useState, useEffect } from 'react';
import './ClientNavbar.css';
import { Link, useNavigate, useParams } from 'react-router-dom'; // Importing useHistory and useParams
import { DestinationContext } from '../../Context/DestinationContext';
import { AiOutlineSearch } from 'react-icons/ai';
import Axios from 'axios'; // Import Axios for making HTTP requests
import { jwtDecode } from "jwt-decode";
import { SlLogout } from "react-icons/sl";
import { ImProfile } from "react-icons/im";

const ClientNavbar = () => {
    const { userId } = useParams();
    const navigate = useNavigate(); // Use history to redirect
    const [menu, setMenu] = useState("home");
    const [resmenu, setResMenu] = useState(false);
    const [totalFavDestinations, setTotalFavDestinations] = useState(0);
    const { getTotalFavDestinations } = useContext(DestinationContext);

    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [typingTimeout, setTypingTimeout] = useState(null); // Timer for delaying API requests
    const [userName, setUserName] = useState(""); // State to store the user's name
    const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

    useEffect(() => {
        // Function to fetch search results
        const fetchSearchResults = async () => {
            try {
                const response = await Axios.get(`http://localhost:8080/ghumdim/viewDestination/search?query=${searchQuery}`);
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

    useEffect(() => {
        // Fetch user's name
        Axios.get(`http://localhost:8080/ghumdim/user/${userId}`)
            .then((response) => {
                setUserName(response.data.firstName); // Assuming the API response contains the user's first name
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, [userId]); // Include userId in the dependency array

    const [decodedToken, setDecodedToken] = useState(null);

    //extract jwt fot firstname
    useEffect(() => {
        const token = localStorage.getItem('jwt');

        if (token) {
            try {
                const decoded = jwtDecode(token);
                setDecodedToken(decoded);
                console.log(decoded, decodedToken);
            } catch (error) {
                console.error('Error decoding token:', error);
                // Handle error if unable to decode token
            }
        } else {
            // Handle case where token is null or empty
        }
    }, []);

    // Handler for search input change
    const handleSearchChange = (event) => {
        const searchText = event.target.value;
        setSearchQuery(searchText);

        // Clear previous timer
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        // Set a new timer to delay API request
        setTypingTimeout(setTimeout(() => {
            setSearchQuery(searchText);
        }, 500)); // Adjust the delay as needed
    };

    // Toggle responsive menu
    const handleMenuToggle = () => {
        setResMenu(!resmenu);
    };

    // Toggle user dropdown
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Logout function
    const handleLogout = () => {
        // Clear cookies by setting their expiry date to a past date
        localStorage.clear();

        // Redirect to home page using history
        navigate('/');
        window.location.reload();

    };

    return (
        <div className={`navbar ${resmenu ? 'responsive' : ''}`}>
            <div className="nav-logo">
                <p><span style={{ color: 'rgb(235, 178, 72)' }}>G</span>humdim</p>
            </div>

            <ul className={resmenu ? 'nav-menu-responsive' : 'nav-menu'}>
                <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link> {menu === "home" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("religious") }}> <Link style={{ textDecoration: 'none' }} to='/religious'>Religious Place</Link>{menu === "religious" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("parks") }}> <Link style={{ textDecoration: 'none' }} to='/parks'>Parks</Link>{menu === "parks" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("hike") }}> <Link style={{ textDecoration: 'none' }} to='/hike'>Hike</Link>{menu === "hike" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("food") }}> <Link style={{ textDecoration: 'none' }} to='/food'>Food</Link>{menu === "food" ? <hr /> : <></>} </li>

            </ul>

            <div className='search-bar'>
                <input type="search" placeholder='Search' value={searchQuery} onChange={handleSearchChange} />
                <button><AiOutlineSearch style={{ width: '25px', height: '27px' }} /></button>
            </div>

            <div className="nav-login-fav">
                {/* Display user's name instead of login icon */}
                <div onClick={toggleDropdown}>
                    <p>Hi, {decodedToken?.firstName}<i className="fa-solid fa-user"></i></p>
                    {showDropdown && (
                        <div className="dropdown-content">
                            {decodedToken && decodedToken.roles === 'CLIENT' && (
                                <Link to={`/userprofile`}><ImProfile size={20} /> </Link>
                            )}
                            <button className='logout-btn ' onClick={handleLogout}><SlLogout size={20} /></button>
                        </div>
                    )}
                </div>
                <Link to='/favourites'>
                    <i className="fa-solid fa-star">
                        <span className='red'><sup>{getTotalFavDestinations()}</sup></span>
                    </i>
                </Link>
            </div>

            <div className="mobile" onClick={handleMenuToggle}>
                <i className={resmenu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
            </div>

            {/* Display search results */}
            {/* <div className="search-results">
                {searchResults.map((result) => (
                    <div key={result.id}>
                        <p>{result.name}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default ClientNavbar;
