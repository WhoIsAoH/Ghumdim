// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
// import './UserProfile.css';
// import { useParams } from 'react-router-dom';

// const UserProfile = ({ match }) => {
//     const { userId } = useParams();
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const response = await Axios.get(`http://localhost:8080/ghumdim/user/${userId}`);
//                 setUserData(response.data);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         fetchUserData();
//     }, [userId]);

//     return (
//         <div className="user-profile">
//             <h2>User Profile</h2>
//             <div className='userprofile-container'>
//                 <div>
//                     <strong>First Name:</strong> {userData && userData.firstName}
//                 </div>
//                 <div>
//                     <strong>Last Name:</strong> {userData && userData.lastName}
//                 </div>
//                 <div>
//                     <strong>Email:</strong> {userData && userData.email}
//                 </div>
//                 <div>
//                     <strong>Location:</strong> {userData && userData.location}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserProfile;

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './UserProfile.css';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await Axios.get(`http://localhost:8080/ghumdim/user/${userId}`);
                setUserData(response.data);
                setLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError(error); // Set error state if request fails
                setLoading(false); // Set loading to false even if there's an error
            }
        };

        fetchUserData();
    }, [userId]);

    // Show loading message while data is being fetched
    if (loading) {
        return <div>Loading...</div>;
    }

    // Show error message if there's an error fetching data
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Show user profile if data is successfully fetched
    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <div className='userprofile-container'>
                <div>
                    <p>User ID: {userId}</p>
                </div>
                <div>
                    <strong>First Name:</strong> {userData.firstName}
                </div>
                <div>
                    <strong>Last Name:</strong> {userData.lastName}
                </div>
                <div>
                    <strong>Email:</strong> {userData.email}
                </div>
                <div>
                    <strong>Location:</strong> {userData.location}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
