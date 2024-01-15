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
        <li onClick={() => { setMenu("category") }}> <Link style={{ textDecoration: 'none' }} to='/category'>Category</Link>{menu === "category" ? <hr /> : <></>} </li>
      </ul>


      <div className='search-bar'>
        <input type="text" placeholder='Search' />
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
      </div>

      <div className="nav-login-fav">
        <Link to='/login'><button>Login</button></Link>
        {/* <i class="fa-regular fa-star"></i> */}
        <Link to='/favourites'><img src={fav_icon} alt="" /></Link>
        <div className='nav-fav-count'>0</div>
      </div>
    </div>


  )
}

export default Navbar