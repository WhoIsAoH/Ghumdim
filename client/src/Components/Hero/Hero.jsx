import React from 'react'
import './Hero.css'
import home from '../Assets/home.png'
// import hero_right from '../Assets/hero_right.png'
import { Link } from 'react-router-dom';


const Hero = () => {


    return (
        <div className='hero'>
            <div className="hero-left">
                {/* <h2>Your Travel Companion</h2> */}
                <p>Travel, enjoy <br />and live a new<br /> and full life.</p>
                <Link to='add-destination' className='add-des'><button className='add-des-button'  >Add Destinations</button></Link>
                {/* <Link to='admin' ><button className='add-des-button'  >Admin</button></Link> */}
                {/* <Link to='userprofile' ><button className='add-des-button'  >userprofile</button></Link> */}
                <Link to='clientnavbar' ><button className='add-des-button'  >clientbar</button></Link>

            </div>
            <div className="hero-right">
                {/* <img src={hero_right} alt="" /> */}
                <img src={home} alt="" />
            </div>
        </div>
    )

}

export default Hero
