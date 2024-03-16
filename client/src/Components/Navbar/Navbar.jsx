import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import fav_icon from '../Assets/fav_icon.png'
import { Link } from 'react-router-dom'
import { DestinationContext } from '../../Context/DestinationContext'
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const { getTotalFavDestinations } = useContext(DestinationContext);

  return (

    <div className='navbar'>

      <div className="nav-logo">
        <img src={logo} alt="" />
        <p style={{ color: 'rgb(235, 178, 72)' }}>G</p><p>humdim</p>
      </div>

      <ul className='nav-menu'>
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
        <Link to='/login'><button>Login</button></Link>

        <Link to='/favourites'><img src={fav_icon} alt="" /></Link>
        <div className='nav-fav-count'>{getTotalFavDestinations()}</div>
      </div>

      <div className='hamburger-menu'>
        <button><AiOutlineClose style={{ width: '25px', height: '27px' }} /></button>
        <button><AiOutlineMenu style={{ width: '25px', height: '27px' }} /></button>
      </div>
    </div>


  )
}

export default Navbar