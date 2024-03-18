import React, { useState } from 'react'
import './Add.css'

const Add = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, for now just logging the values
        console.log('Name:', name);
        console.log('Address:', address);
        console.log('Image:', image);
        // Reset the form after submission
        setName('');
        setAddress('');
        setImage(null);
    };

    return (
        <div className='add-des-container'>
            <form onSubmit={handleSubmit} className="add-destination-form">
                <label htmlFor="name">Name of the Destination:</label>
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
                <label htmlFor="image">Upload Image:</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Add
