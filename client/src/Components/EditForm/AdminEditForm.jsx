// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import './AdminEditForm.css'

// const AdminEditForm = () => {

//     const [alldestination, setAllDestination] = useState([]);
//     useEffect(() => {
//         axios.get("http://localhost:8080/ghumdim/viewAllDestination").then((res) => {
//             console.log(res.data);
//             setAllDestination(res.data);
//         })
//             .catch((error) => {
//                 console.error('error fetching data', error);
//             });
//     }, []);

//     const [editdestinationdata, setEditDestinationData] = useState({
//         name: '',
//         address: '',
//         category: '',
//         latitude: '',
//         status: '',
//         contactNumber: '',
//         rating: 1,
//         description: '',
//         author: 1, // Assuming you need to set the author field
//         longitude: ''
//         // multiFile: null,
//     });

//     console.log(editdestinationdata);

//     const handleChange = (e) => {
//         const { name, value, type, files } = e.target;
//         const newValue = type === 'file' ? files[0] : value;

//         setEditDestinationData({ ...editdestinationdata, [name]: newValue });
//         console.log('formDta', editdestinationdata);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:8080/ghumdim/createDestination', {
//                 // destinationdata.name,
//                 // destinationdata.address,
//                 // destinationdata.category,
//                 // destinationdata.latitude,
//                 // destinationdata.status,
//                 // destinationdata.contactNumber,
//                 // destinationdata.rating,
//                 // destinationdata.description,
//                 // destinationdata.author, // Assuming you need to set the author field
//                 // destinationdata.longitude,
//                 // destinationdata.multiFile,
//             },
//                 {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',


//                     }
//                     // body: formData
//                 });
//             console.log(response.data);
//             editdestinationdata({
//                 name: '',
//                 address: '',
//                 category: '',
//                 latitude: '',
//                 status: '',
//                 contactNumber: '',
//                 rating: 1,
//                 description: '',
//                 author: 1, // Assuming you need to set the author field
//                 longitude: '',
//                 multiFile: null,
//             })
//         } catch (error) {
//             console.error(error);
//         }

//         // Reset the form after submission
//         // ...
//     };

//     return (
//         <div className='admin-edit-form'>
//             <form onSubmit={handleSubmit} className="add-edit-form">
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     type="text"
//                     id="name"
//                     name='name'
//                     // placeholder='hello'
//                     value={editdestinationdata.name}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="address">Address:</label>
//                 <input
//                     type="text"
//                     id="address"
//                     name='address'
//                     value={editdestinationdata.address}
//                     onChange={handleChange}
//                     required
//                 />
//                 <label htmlFor="description">Description:</label>
//                 <textarea
//                     id="description"
//                     name='description'
//                     value={editdestinationdata.description}
//                     onChange={handleChange}
//                 ></textarea>

//                 <label htmlFor="latitude">Latitude:</label>
//                 <input
//                     type="text"
//                     id="latitude"
//                     name='latitude'
//                     value={editdestinationdata.latitude}
//                     onChange={handleChange}
//                 // disabled={isCurrentLocation}
//                 />

//                 <label htmlFor="longitude">Longitude:</label>
//                 <input
//                     type="text"
//                     id="longitude"
//                     name='longitude'
//                     value={editdestinationdata.longitude}
//                     onChange={handleChange}
//                 // disabled={isCurrentLocation}
//                 />
//                 <label htmlFor="status">Status:</label>
//                 <select
//                     id="status"
//                     name='status'
//                     value={editdestinationdata.status}
//                     onChange={handleChange}
//                 >
//                     <option value="pending">Pending</option>
//                     <option value="verified">Verified</option>
//                 </select>

//                 <label htmlFor="category">Category:</label>
//                 <select id="category" name='category' value={editdestinationdata.category} onChange={handleChange}>
//                     <option value="RELIGIOUS">Religious</option>
//                     <option value="HIKE">Hike</option>
//                     <option value="PARKS">Parks</option>
//                     <option value="TREKKING">Trekking</option>
//                     <option value="FOOD">Food</option>
//                 </select>

//                 <button type="submit">Edit</button>
//             </form>

//         </div>
//     )
// }

// export default AdminEditForm

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminEditForm.css';

const AdminEditForm = () => {
    const [alldestination, setAllDestination] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/ghumdim/viewAllDestination")
            .then((res) => {
                console.log(res.data);
                setAllDestination(res.data);
            })
            .catch((error) => {
                console.error('error fetching data', error);
            });
    }, []);

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
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditDestinationData({ ...editdestinationdata, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/ghumdim/createDestination', editdestinationdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            // Clear form fields after successful submission
            setEditDestinationData({
                name: '',
                address: '',
                category: '',
                latitude: '',
                status: '',
                contactNumber: '',
                rating: 1,
                description: '',
                author: 1,
                longitude: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='admin-edit-form'>
            <form onSubmit={handleSubmit} className="add-edit-form">
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

                <label htmlFor="latitude">Latitude:</label>
                <input
                    type="text"
                    id="latitude"
                    name='latitude'
                    value={editdestinationdata.latitude}
                    onChange={handleChange}
                />

                <label htmlFor="longitude">Longitude:</label>
                <input
                    type="text"
                    id="longitude"
                    name='longitude'
                    value={editdestinationdata.longitude}
                    onChange={handleChange}
                />

                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    name='status'
                    value={editdestinationdata.status}
                    onChange={handleChange}
                >
                    <option value="pending">Pending</option>
                    <option value="verified">Verified</option>
                </select>

                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    name='category'
                    value={editdestinationdata.category}
                    onChange={handleChange}
                >
                    <option value="RELIGIOUS">Religious</option>
                    <option value="HIKE">Hike</option>
                    <option value="PARKS">Parks</option>
                    <option value="FOOD">Food</option>
                </select>

                <button type="submit">Edit</button>
            </form>
        </div>
    );
};

export default AdminEditForm;

