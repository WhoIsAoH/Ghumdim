import React, { useState, useEffect } from 'react'
import './Admin.css'
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom';
// import Userdata from '../UserData/Userdata';

const Admin = (props) => {

    // const { destinationId } = useParams();

    const [alldestination, setAllDestination] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8080/ghumdim/viewAllDestination").then((res) => {
            console.log(res.data);
            setAllDestination(res.data);
        })
            .catch((error) => {
                console.error('error fetching data', error);
            });
    }, []);

    const handleStatusChange = (index, newStatus) => {
        // Update the status of the destination at the specified index
        const updatedDestinations = [...alldestination];
        updatedDestinations[index].status = newStatus;
        setAllDestination(updatedDestinations);
    };
    return (
        <div className='admin-panel'>
            <h1>Admin Panel</h1>
            <table className='admin-table'>
                <thead>
                    <tr>
                        <th>Destination</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Control</th>
                    </tr>
                </thead>
                <tbody>
                    {alldestination.map((destination, index) => (
                        <tr key={index}>
                            <td><Link to={`/destination/${destination.id}`}><img className='destination-image' src={`https://firebasestorage.googleapis.com/v0/b/ghumdim.appspot.com/o/${destination.photo}?alt=media`} alt="" /></Link></td>
                            {/* <td><img src={`https://firebasestorage.googleapis.com/v0/b/ghumdim.appspot.com/o/${destination.photo}?alt=media`} alt="" /></td> */}
                            <td>{destination.name}</td>
                            <td>{destination.category}</td>
                            <td>{destination.address}</td>
                            <td>{destination.status}
                                {/* <select value={destination.status} onChange={(e) => handleStatusChange(index, e.target.value)}>
                                    <option value="pending">Pending</option>
                                    <option value="verified">Verified</option>
                                </select> */}

                            </td>
                            <td>
                                <Link to={`/admindestinationdisplay/${destination.id}`}><button className='edit-des-button'  >Edit</button></Link>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Admin
