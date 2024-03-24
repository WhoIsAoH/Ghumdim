import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import './DestinationDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from "../Assets/star_dull_icon.png"
import { DestinationContext } from '../../Context/DestinationContext'
import Axios, { all } from 'axios'
import './AdminDestinationDisplay.css'

const AdminDestinationDisplay = (props) => {
    const { destinationId } = useParams();

    // console.log(destinationId);

    const [alldestination, setAllDestination] = useState({});

    const [modal, setmodal] = useState(false);
    const togglemodal = () => {
        setmodal(!modal)
    }



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
    }, []);

    // const { destination } = props;
    const { addToFavourite } = useContext(DestinationContext);

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
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    {/* <p>(122)</p> */}
                </div>
                <div className='destinationdisplay-right-description'>
                    <h4>Description</h4>
                    {alldestination?.description}
                </div>
                <div className='destinationdisplay-right-location'>
                    <p>Location: {alldestination?.latitude},{alldestination?.longitude}</p>
                    {/* <p>{alldestination?.author}</p> */}
                </div>

                <button onClick={() => { addToFavourite(alldestination?.destinationId) }}>Add to Favourites</button>

                {/* Edit the destinations */}
                <button className='btn-modal' onClick={togglemodal} >Edit</button>

                {modal && (
                    <div className="modal">
                        <div onClick={togglemodal} className="overlay"></div>
                        <div className='modal-content'>
                            <h2>modaltitle</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident inventore iste.</p>
                            <button className='close-modal' onClick={togglemodal}>Close</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default AdminDestinationDisplay




