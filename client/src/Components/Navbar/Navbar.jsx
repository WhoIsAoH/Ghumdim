import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { DestinationContext } from '../../Context/DestinationContext';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [resmenu, setResMenu] = useState(false);
  const { getTotalFavDestinations } = useContext(DestinationContext);

  const handleMenuToggle = () => {
    setResMenu(!resmenu);
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
        <input type="search" placeholder='Search' />
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
    </div>
  );
};

export default Navbar;
