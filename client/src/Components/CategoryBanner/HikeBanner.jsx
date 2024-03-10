import React from 'react'
import banner_image from '../Assets/Syambhunath.jpg'
import './Banner.css'

const HikeBanner = () => {
    return (
        <div className='banner'>

            <div class="banner-left">
                <h1>Hiking Destination</h1>
            </div>

            <div class="banner-right">
                <img src={banner_image} alt=""/>
            </div>

        </div>
    )
}

export default HikeBanner
