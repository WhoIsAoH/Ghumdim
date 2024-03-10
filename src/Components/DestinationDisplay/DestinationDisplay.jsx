import React from 'react'
import './DestinationDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from "../Assets/star_dull_icon.png"

const DestinationDisplay = (props) => {

    const { destination } = props;
    return (
        <div className='destinationdisplay'>
            <div className="destinationdisplay-left">
                <div className="destinationdisplay-img-list">
                    <img src={destination.image} alt="" />
                    <img src={destination.image} alt="" />
                    <img src={destination.image} alt="" />
                    <img src={destination.image} alt="" />
                </div>
                <div className="destinationdisplay-img">
                    <img className='destinationdisplay-main-img' src={destination.image} alt="" />
                </div>
            </div>

            <div className="destinationdisplay-right">
                <h1>{destination.name}</h1>
                <div className='destinationdisplay-right-star'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className='destinationdisplay-right-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo veniam mollitia, earum tempora quo. Pariatur reiciendis error natus. Officiis, vel.
                </div>
                <button>Add to Favourites</button>
                {/* <p className='destinationdisplay-right-category'><span>Category:</span></p> */}
            </div>
        </div>
    )
}

export default DestinationDisplay
