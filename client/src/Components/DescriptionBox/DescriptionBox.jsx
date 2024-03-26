import React, { useState, useEffect } from 'react'
import './DescriptionBox.css'
import Axios from 'axios';
// import { useParams } from 'react-router-dom'



const DescriptionBox = () => {
    // const { destinationId } = useParams();


    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8080/ghumdim/getAllReview").then((res) => {
            console.log('data fetched', res.data);
            // console.log();
            setReviews(res.data);
        })
            .catch((error) => {
                console.error('error fetching data', error);
            });
    }, []);
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className="descriptionbox-nav-box fade">
                    Reviews
                </div>
            </div>
            <div className="descriptionbox-description">
                {/* <p>name:</p>
                <p>comment:</p>
                <hr /> */}
                {reviews.map((review) => (
                    <div key={review.id}>
                        <p>Review ID: {review?.id}</p>
                        <p>Comment:{review?.reviewDetail}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DescriptionBox
