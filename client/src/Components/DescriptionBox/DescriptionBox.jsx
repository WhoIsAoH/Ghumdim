// import React, { useState, useEffect } from 'react';
// import './DescriptionBox.css';
// import Axios from 'axios';
// import { useParams } from 'react-router-dom';
// const DescriptionBox = () => {
//     const { destinationId } = useParams();
//     const [reviews, setReviews] = useState([]);
//     const [newReview, setNewReview] = useState('');
//     // const [userId, setUserId] = useState(0); // Assuming you have the userId
//     // const [destinationId, setDestinationId] = useState(0); // Assuming you have the destinationId

//     useEffect(() => {
//         fetchReviews();
//     }, []);

//     const fetchReviews = () => {
//         Axios.get(`http://localhost:8080/ghumdim/getReview/${destinationId}`)
//             .then((res) => {
//                 console.log('data fetched', res.data);
//                 setReviews(res.data);
//             })
//             .catch((error) => {
//                 console.error('error fetching data', error);
//             });
//     };

//     const handleReviewSubmit = (e) => {
//         e.preventDefault();
//         if (newReview.trim() === '') {
//             alert('Please enter a review comment.');
//             return;
//         }

//         const reviewData = {
//             reviewDetail: newReview,
//             // user: userId,
//             // destination: destinationId

//             user: '1',
//             destination: destinationId
//         };

//         Axios.post("http://localhost:8080/ghumdim/createReview", reviewData)
//             .then((res) => {
//                 console.log('Review posted successfully:', res.data);
//                 // Fetch reviews again to update the list with the newly added review
//                 fetchReviews();
//                 // Clear the input field after posting the review
//                 setNewReview('');
//             })
//             .catch((error) => {
//                 console.error('Error posting review:', error);
//             });
//     };

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
//                         <p>Reviewer Name: {review?.userName}</p>
//                         <p>Comment: {review?.reviewDetail}</p>
//                         <hr />
//                     </div>
//                 ))}
//             </div>
//             <hr />
//             <div className="add-review">
//                 <form onSubmit={handleReviewSubmit}>
//                     <textarea
//                         placeholder="Write your review..."
//                         value={newReview}
//                         onChange={(e) => setNewReview(e.target.value)}
//                         required
//                     ></textarea>
//                     <button type="submit">Post Review</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default DescriptionBox;


import React, { useState, useEffect } from 'react';
import './DescriptionBox.css';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import StarRating from '../StarRating/StarRating'; // Import the StarRating component

const DescriptionBox = () => {
    const { destinationId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(0); // State to store the selected rating

    useEffect(() => {
        fetchReviews();
    }, []);

    // useEffect(() => {
    //     console.log('Rating:', rating); // Log the rating whenever it changes
    // }, [rating]);

    const fetchReviews = () => {
        Axios.get(`http://localhost:8080/ghumdim/getReview/${destinationId}`)
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

        const reviewData = {
            reviewDetail: newReview,
            rating: rating, // Include the rating in the review data
            user: '1',
            destination: destinationId
        };

        Axios.post("http://localhost:8080/ghumdim/createReview", reviewData)
            .then((res) => {
                console.log('Review posted successfully:', res.data);
                fetchReviews();
                setNewReview('');
                setRating(0); // Reset the rating after posting the review
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
                        <p>Reviewer Name: {review?.userName}</p>
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
                    <StarRating onChange={setRating} /> {/* Include the StarRating component */}
                    <button type="submit">Post Review</button>
                </form>
            </div>
        </div>
    );
};

export default DescriptionBox;

