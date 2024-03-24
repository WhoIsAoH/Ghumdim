import React, { useState } from 'react'
import axios from 'axios';
import './AdminEditForm.css'

const AdminEditForm = () => {

    const [editdestinationdata, setEditDestinationData] = useState({
        name: '',
        address: '',
        category: '',
        latitude: '',
        status: '',
        contactNumber: '',
        rating: 1,
        description: '',
        author: 1, // Assuming you need to set the author field
        longitude: ''
        // multiFile: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const newValue = type === 'file' ? files[0] : value;

        setEditDestinationData({ ...editdestinationdata, [name]: newValue });
        console.log('formDta', editdestinationdata);
    };


    // const handleCurrentLocationChange = (e) => {
    //     setIsCurrentLocation(e.target.checked);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/ghumdim/createDestination', {
                // destinationdata.name,
                // destinationdata.address,
                // destinationdata.category,
                // destinationdata.latitude,
                // destinationdata.status,
                // destinationdata.contactNumber,
                // destinationdata.rating,
                // destinationdata.description,
                // destinationdata.author, // Assuming you need to set the author field
                // destinationdata.longitude,
                // destinationdata.multiFile,
            },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',


                    }
                    // body: formData
                });
            console.log(response.data);
            editdestinationdata({
                name: '',
                address: '',
                category: '',
                latitude: '',
                status: '',
                contactNumber: '',
                rating: 1,
                description: '',
                author: 1, // Assuming you need to set the author field
                longitude: '',
                multiFile: null,
            })
        } catch (error) {
            console.error(error);
        }

        // Reset the form after submission
        // ...
    };

    return (
        <div className='admin-edit-form'>
            <form onSubmit={handleSubmit} className="add-destination-form">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name='name'
                    value={editdestinationdata.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name='address'
                    value={editdestinationdata.address}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name='description'
                    value={editdestinationdata.description}
                    onChange={handleChange}
                ></textarea>

                {/* <label htmlFor="currentLocation">Is this your current location?</label>
                <input
                    type="checkbox"
                    id="currentLocation"
                    name='currentLocation'
                    checked={isCurrentLocation}
                    onChange={handleCurrentLocationChange}
                /> <br /> */}

                <label htmlFor="latitude">Latitude:</label>
                <input
                    type="text"
                    id="latitude"
                    name='latitude'
                    value={editdestinationdata.latitude}
                    onChange={handleChange}
                // disabled={isCurrentLocation}
                />

                <label htmlFor="longitude">Longitude:</label>
                <input
                    type="text"
                    id="longitude"
                    name='longitude'
                    value={editdestinationdata.longitude}
                    onChange={handleChange}
                // disabled={isCurrentLocation}
                />

                <button type="submit">Edit</button>
            </form>

        </div>
    )
}

export default AdminEditForm
