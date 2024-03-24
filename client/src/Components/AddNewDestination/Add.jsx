import React, { useState, useEffect } from 'react';
import './Add.css';
import axios from 'axios';

const AddDestinationForm = () => {
    const [destinationdata, setDestinationData] = useState({
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

    const [multiFile, setMultiFile] = useState(null); // State to store file

    const [isCurrentLocation, setIsCurrentLocation] = useState(false); // New state for checkbox

    useEffect(() => {
        if (isCurrentLocation && "geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setDestinationData({
                    ...destinationdata,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });

            });
        } else {
            setDestinationData({
                ...destinationdata,
                latitude: '',
                longitude: ''
            })

        }
    }, [isCurrentLocation]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const newValue = type === 'file' ? files[0] : value;

        setDestinationData({ ...destinationdata, [name]: newValue });
        console.log('formDta', destinationdata);
    };


    const handleCurrentLocationChange = (e) => {
        setIsCurrentLocation(e.target.checked);
    };

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
            setDestinationData({
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
        <div className="add-des-container">
            <form onSubmit={handleSubmit} className="add-destination-form">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name='name'
                    value={destinationdata.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name='address'
                    value={destinationdata.address}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="category">Category:</label>
                <select id="category" name='category' value={destinationdata.category} onChange={handleChange}>
                    <option value="RELIGIOUS">Religious</option>
                    <option value="HIKE">Hike</option>
                    <option value="PARKS">Parks</option>
                    <option value="TREKKING">Trekking</option>
                    <option value="FOOD">Food</option>
                </select>

                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                    type="tel"
                    id="contactNumber"
                    name='contactNumber'
                    value={destinationdata.contactNumber}
                    onChange={handleChange}
                />

                <label htmlFor="image">Upload Image:</label>
                <input
                    type="file"
                    id="image"
                    name='multiFile'
                    value={destinationdata.multiFile}
                    // onChange={handleChange}
                    onChange={(e) => setMultiFile(e.target.files[0])} // Store selected file
                    required
                />

                <label htmlFor="rating">Ratings:</label>
                <select id="rating" name='rating' value={destinationdata.rating} onChange={handleChange}>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name='description'
                    value={destinationdata.description}
                    onChange={handleChange}
                ></textarea>

                <label htmlFor="currentLocation">Is this your current location?</label>
                <input
                    type="checkbox"
                    id="currentLocation"
                    name='currentLocation'
                    checked={isCurrentLocation}
                    onChange={handleCurrentLocationChange}
                /> <br />

                <label htmlFor="latitude">Latitude:</label>
                <input
                    type="text"
                    id="latitude"
                    name='latitude'
                    value={destinationdata.latitude}
                    onChange={handleChange}
                    disabled={isCurrentLocation}
                />

                <label htmlFor="longitude">Longitude:</label>
                <input
                    type="text"
                    id="longitude"
                    name='longitude'
                    value={destinationdata.longitude}
                    onChange={handleChange}
                    disabled={isCurrentLocation}
                />



                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddDestinationForm;