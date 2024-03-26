import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DestinationDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from "../Assets/star_dull_icon.png"
import { DestinationContext } from '../../Context/DestinationContext'
import Axios, { all } from 'axios'

const DestinationDisplay = (props) => {
    const { destinationId } = useParams();
    console.log(destinationId);
    const [alldestination, setAllDestination] = useState({});

    useEffect(() => {
        if (destinationId) {
            Axios.get(`http://localhost:8080/ghumdim/viewDestination/${destinationId}`).then((res) => {
                console.log(res.data,);
                setAllDestination(res.data);
            })
                .catch((error) => {
                    console.error('error fetching data', error);
                });
        }
    }, [destinationId]);

    // const { destination } = props;
    const { addToFavourite } = useContext(DestinationContext);

    return (
        <div className='destinationdisplay'>
            {/* <h1>{alldestination?.category}</h1> */}
            <div className="destinationdisplay-left">

                <div className="destinationdisplay-img">
                    <img className='destinationdisplay-main-img' src={`https://firebasestorage.googleapis.com/v0/b/ghumdim.appspot.com/o/${alldestination?.photo}?alt=media`} alt="" />
                </div>
            </div>

            <div className="destinationdisplay-right">
                <h1>{alldestination?.name}</h1>
                <div className='destinationdisplay-right-star'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    {/* <p>(122)</p> */}
                </div>
                <div className='destinationdisplay-right-description'>
                    <h4>Description</h4>
                    <p>{alldestination?.description}</p>
                </div>
                <div className='destinationdisplay-right-location'>
                    <p>Location: {alldestination?.address}</p>
                    <p>Latitude:{alldestination?.latitude}</p>
                    <p>Longitude:{alldestination?.longitude}</p>
                    {/* <p>{alldestination?.author}</p> */}
                </div>

                <button onClick={() => { addToFavourite(alldestination?.destinationId) }}>Add to Favourites</button>
            </div>
        </div>
    )
}

export default DestinationDisplay
