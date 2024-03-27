import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DestinationDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from "../Assets/star_dull_icon.png";
import { DestinationContext } from '../../Context/DestinationContext';
import Axios from 'axios';

const DestinationDisplay = () => {
    const { destinationId } = useParams();
    const [alldestination, setAllDestination] = useState({});
    const [rating, setRating] = useState(0); // State to store the rating

    useEffect(() => {
        if (destinationId) {
            Axios.get(`http://localhost:8080/ghumdim/viewDestination/${destinationId}`).then((res) => {
                console.log(res.data);
                setAllDestination(res.data);
                setRating(res.data.rating); // Set the rating obtained from the API response
            })
                .catch((error) => {
                    console.error('error fetching data', error);
                });
        }
    }, [destinationId]);

    const { addToFavourite } = useContext(DestinationContext);

    // Function to render star icons based on rating
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<img key={i} src={star_icon} alt="" />);
            } else {
                stars.push(<img key={i} src={star_dull_icon} alt="" />);
            }
        }
        return stars;
    };

    return (
        <div className='destinationdisplay'>
            <div className="destinationdisplay-left">
                <div className="destinationdisplay-img">
                    <img className='destinationdisplay-main-img' src={`https://firebasestorage.googleapis.com/v0/b/ghumdim.appspot.com/o/${alldestination?.photo}?alt=media`} alt="" />
                </div>
            </div>
            <div className="destinationdisplay-right">
                <h1>{alldestination?.name}</h1>
                <div className='destinationdisplay-right-star'>
                    {renderStars()} {/* Render star icons dynamically */}
                </div>
                <div className='destinationdisplay-right-description'>
                    <h4>Description</h4>
                    <p>{alldestination?.description}</p>
                </div>
                <div className='destinationdisplay-right-location'>
                    <p>Location: {alldestination?.address}</p>
                    <p>Latitude: {alldestination?.latitude}</p>
                    <p>Longitude: {alldestination?.longitude}</p>
                </div>
                <button onClick={() => { addToFavourite(alldestination?.destinationId) }}>Add to Favourites</button>
            </div>
        </div>
    );
};

export default DestinationDisplay;

