// import React, { useContext, useState, useEffect } from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// import { DestinationContext } from '../../Context/DestinationContext';
// import { AiOutlineSearch } from 'react-icons/ai';

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   const [resmenu, setResMenu] = useState(false);
//   const [totalFavDestinations, setTotalFavDestinations] = useState(0);
//   const { getTotalFavDestinations } = useContext(DestinationContext);

//   const [search, setSearch] = useState([]);
//   useEffect(() => {
//     Axios.get("http://localhost:8080/ghumdim/viewDestination/search").then((res) => {
//       console.log(res.data);
//       setSearch(res.data);
//     })
//       .catch((error) => {
//         console.error('error fetching data', error);
//       });
//   }, []);

//   // useEffect(() => {
//   //   setTotalFavDestinations(getTotalFavDestinations);
//   // }, [getTotalFavDestinations]);

//   const handleMenuToggle = () => {
//     setResMenu(!resmenu);
//   };

//   return (
//     <div className={`navbar ${resmenu ? 'responsive' : ''}`}>
//       <div className="nav-logo">
//         <p><span style={{ color: 'rgb(235, 178, 72)' }}>G</span>humdim</p>
//       </div>

//       <ul className={resmenu ? 'nav-menu-responsive' : 'nav-menu'}>
//         <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link> {menu === "home" ? <hr /> : <></>} </li>
//         <li onClick={() => { setMenu("religious") }}> <Link style={{ textDecoration: 'none' }} to='/religious'>Religious Place</Link>{menu === "religious" ? <hr /> : <></>} </li>
//         <li onClick={() => { setMenu("parks") }}> <Link style={{ textDecoration: 'none' }} to='/parks'>Parks</Link>{menu === "parks" ? <hr /> : <></>} </li>
//         <li onClick={() => { setMenu("hike") }}> <Link style={{ textDecoration: 'none' }} to='/hike'>Hike</Link>{menu === "hike" ? <hr /> : <></>} </li>
//       </ul>

//       <div className='search-bar'>
//         <input type="search" placeholder='Search' />
//         <button><AiOutlineSearch style={{ width: '25px', height: '27px' }} /></button>
//       </div>

//       <div className="nav-login-fav">
//         <Link to='/login'><i className="fa-solid fa-user"></i></Link>
//         <Link to='/favourites'>
//           <i className="fa-solid fa-star">
//             <span className='red'><sup>{getTotalFavDestinations()}</sup></span>
//           </i>
//         </Link>
//       </div>

//       <div className="mobile" onClick={handleMenuToggle}>
//         <i className={resmenu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { DestinationContext } from '../../Context/DestinationContext';
import { AiOutlineSearch } from 'react-icons/ai';
import Axios from 'axios'; // Import Axios for making HTTP requests

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [resmenu, setResMenu] = useState(false);
  const [totalFavDestinations, setTotalFavDestinations] = useState(0);
  const { getTotalFavDestinations } = useContext(DestinationContext);

  const [searchResults, setSearchResults] = useState([]); // State to store search results
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query

  useEffect(() => {
    // Function to fetch search results
    const fetchSearchResults = async () => {
      try {
        const response = await Axios.get(`http://localhost:8080/ghumdim/viewDestination/search?=${searchQuery}`);
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

  const handleMenuToggle = () => {
    setResMenu(!resmenu);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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
      </ul>

      <div className='search-bar'>
        <input type="search" placeholder='Search' value={searchQuery} onChange={handleSearchChange} />
        <button><AiOutlineSearch style={{ width: '25px', height: '27px' }} /></button>
      </div>

      <div className="nav-login-fav">
        <Link to='/login'><i className="fa-solid fa-user"></i></Link>
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
      <div className="search-results">
        {searchResults.map((result) => (
          <div key={result.id}>
            {/* Display search result */}
            <p>{result.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

