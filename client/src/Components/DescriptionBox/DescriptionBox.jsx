// import React, { useState, useEffect } from 'react'
// import './DescriptionBox.css'
// import Axios from 'axios';
// // import { useParams } from 'react-router-dom'



// const DescriptionBox = () => {
//     // const { destinationId } = useParams();


//     const [reviews, setReviews] = useState([]);
//     useEffect(() => {
//         Axios.get("http://localhost:8080/ghumdim/getAllReview").then((res) => {
//             console.log('data fetched', res.data);
//             // console.log();
//             setReviews(res.data);
//         })
//             .catch((error) => {
//                 console.error('error fetching data', error);
//             });
//     }, []);
//     return (
//         <div className='descriptionbox'>
//             <div className='descriptionbox-navigator'>
//                 <div className="descriptionbox-nav-box fade">
//                     Reviews
//                 </div>
//             </div>
//             <div className="descriptionbox-description">
//                 {reviews.map((review) => (
//                     <div key={review.id}>
//                         <p>Review ID: {review?.id}</p>
//                         <p>Comment:{review?.reviewDetail}</p>
//                         <hr />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default DescriptionBox



import React, { useState, useEffect } from 'react';
import './DescriptionBox.css';
import Axios from 'axios';

const DescriptionBox = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = () => {
        Axios.get("http://localhost:8080/ghumdim/getAllReview")
            .then((res) => {
                console.log('data fetched', res.data);
                setReviews(res.data);
            })
            .catch((error) => {
                console.error('error fetching data', error);
            });
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.trim() === '') {
            alert('Please enter a review comment.');
            return;
        }

        Axios.post("http://localhost:8080/ghumdim/createReview")
            .then((res) => {
                console.log('Review posted successfully:', res.data);
                // Fetch reviews again to update the list with the newly added review
                fetchReviews();
                // Clear the input field after posting the review
                setNewReview('');
            })
            .catch((error) => {
                console.error('Error posting review:', error);
            });
    };

    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className="descriptionbox-nav-box fade">
                    Reviews
                </div>
            </div>
            <div className="descriptionbox-description">
                {reviews.map((review) => (
                    <div key={review.id}>
                        <p>Review ID: {review?.id}</p>
                        <p>Comment: {review?.reviewDetail}</p>
                        <hr />
                    </div>
                ))}
            </div>
            <hr />
            <div className="add-review">
                <form onSubmit={handleReviewSubmit}>
                    <textarea
                        placeholder="Write your review..."
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit">Post Review</button>
                </form>
            </div>
        </div>
    );
};

export default DescriptionBox;

