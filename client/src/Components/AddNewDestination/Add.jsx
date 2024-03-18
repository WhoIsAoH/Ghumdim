import React, { useState, useEffect } from 'react';
import './Add.css';

const AddDestinationForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [category, setCategory] = useState('RELIGIOUS');
    const [contactNumber, setContactNumber] = useState('');
    const [image, setImage] = useState(null);
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [isCurrentLocation, setIsCurrentLocation] = useState(false); // New state for checkbox

    useEffect(() => {
        if (isCurrentLocation && "geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        } else {
            setLatitude('');
            setLongitude('');
        }
    }, [isCurrentLocation]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleContactNumberChange = (e) => {
        setContactNumber(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleRatingChange = (e) => {
        setRating(parseInt(e.target.value));
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleLatitudeChange = (e) => {
        setLatitude(e.target.value);
    };

    const handleLongitudeChange = (e) => {
        setLongitude(e.target.value);
    };

    const handleCurrentLocationChange = (e) => {
        setIsCurrentLocation(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission
        const formData = {
            name,
            address,
            category,
            contactNumber,
            image,
            rating,
            description,
            latitude: isCurrentLocation ? 'CURRENT' : latitude || null, // Set to 'CURRENT' if current location checkbox is checked
            longitude: isCurrentLocation ? 'CURRENT' : longitude || null, // Set to 'CURRENT' if current location checkbox is checked
        };
        console.log('Form Data:', formData);
        // Reset the form after submission
        setName('');
        setAddress('');
        setCategory('RELIGIOUS');
        setContactNumber('');
        setImage(null);
        setRating(0);
        setDescription('');
        setLatitude('');
        setLongitude('');
        setIsCurrentLocation(false); // Reset checkbox state
    };

    return (
        <div className="add-des-container">
            <form onSubmit={handleSubmit} className="add-destination-form">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />

                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={handleAddressChange}
                    required
                />

                <label htmlFor="category">Category:</label>
                <select id="category" value={category} onChange={handleCategoryChange}>
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
                    value={contactNumber}
                    onChange={handleContactNumberChange}
                />

                <label htmlFor="image">Upload Image:</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                />

                <label htmlFor="rating">Ratings:</label>
                <select id="rating" value={rating} onChange={handleRatingChange}>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                ></textarea>

                <label htmlFor="currentLocation">Is this your current location?</label>
                <input
                    type="checkbox"
                    id="currentLocation"
                    checked={isCurrentLocation}
                    onChange={handleCurrentLocationChange}
                /> <br />

                <label htmlFor="latitude">Latitude:</label>
                <input
                    type="text"
                    id="latitude"
                    value={latitude}
                    onChange={handleLatitudeChange}
                    disabled={isCurrentLocation}
                />

                <label htmlFor="longitude">Longitude:</label>
                <input
                    type="text"
                    id="longitude"
                    value={longitude}
                    onChange={handleLongitudeChange}
                    disabled={isCurrentLocation}
                />



                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddDestinationForm;