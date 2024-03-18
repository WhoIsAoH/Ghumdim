import React from 'react'
import './Hero.css'
import hero_right from '../Assets/hero_right.png'
import { Link } from 'react-router-dom';


const Hero = () => {


    return (
        <div className='hero'>
            <div className="hero-left">
                {/* <h2>Your Travel Companion</h2> */}
                <p>Travel, enjoy <br />and live a new<br /> and full life.</p>
                <Link to='add-destination' className='add-des'><button className='add-des-button'  >Add Destinations</button></Link>
            </div>
            <div className="hero-right">
                <img src={hero_right} alt="" />
            </div>
        </div>
    )

}

export default Hero
