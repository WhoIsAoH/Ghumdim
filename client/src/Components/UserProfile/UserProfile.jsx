import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const UserProfile = ({ userId }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await Axios.get(`http://localhost:8080/ghumdim/user/${userId}`);
                setUserData(response.data);
                // setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
                // setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>User not found</div>;
    }

    const { firstname, lastname, email } = userData;

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <div>
                <strong>FirstName:</strong> {firstname}
            </div>
            <div>
                <strong>LastName:</strong> {lastname}
            </div>
            <div>
                <strong>Email:</strong> {email}
            </div>
        </div>
    );
};

export default UserProfile;