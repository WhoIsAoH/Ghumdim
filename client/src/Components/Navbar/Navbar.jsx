import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import fav_icon from '../Assets/fav_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (

    <div className='navbar'>

      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Ghumdim</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link> {menu === "home" ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu("religious") }}> <Link style={{ textDecoration: 'none' }} to='/religious'>Religious Place</Link>{menu === "religious" ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu("parks") }}> <Link style={{ textDecoration: 'none' }} to='/parks'>Parks</Link>{menu === "parks" ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu("hike") }}> <Link style={{ textDecoration: 'none' }} to='/hike'>Hike</Link>{menu === "hike" ? <hr /> : <></>} </li>
      </ul>


      {/* <div className='search-bar'>
        <input type="text" placeholder='Search' />
        
      </div> */}

      <div className="nav-login-fav">
        <Link to='/login'><button>Login</button></Link>

        <Link to='/favourites'><img src={fav_icon} alt="" /></Link>
        <div className='nav-fav-count'>0</div>
      </div>
    </div>


  )
}

export default Navbar