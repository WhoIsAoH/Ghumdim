import React from 'react'
import './Hero.css'
// import left_pic from '../Assets/hero-left-pic.png'
import hero_right from '../Assets/hero_right.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                {/* <h2>Your Travel Companion</h2> */}
            <p>Travel, enjoy <br />and live a new<br /> and full life</p>


                <div className='high-rated'></div>
            </div>

            <div className="hero-right">
                <img src={hero_right} alt="" />
            </div>
        </div>
    )
  
}

export default Hero
