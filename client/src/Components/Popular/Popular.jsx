import React, { useState, useEffect } from 'react';
import './Popular.css';
import Item from '../Items/Item';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Popular = () => {
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  useEffect(() => {
    const fetchNearbyPlaces = async () => {
      try {
        const userLatitude = 0;
        const userLongitude = 0;
        const response = await Axios.get(`http://localhost:8080/ghumdim/viewDestinationsSortedByDistance?userLatitude=${userLatitude}&userLongitude=${userLongitude}`);
        // Slice the response data to get only the first four items
        const firstFourPlaces = response.data.slice(0, 4);
        setNearbyPlaces(firstFourPlaces);
      } catch (error) {
        console.error('Error fetching nearby places:', error);
      }
    };

    fetchNearbyPlaces();
  }, []);

  return (
    <div className='popular'>
      <h1>Places Near You</h1>
      <hr />
      <p className='showmore-btn'><Link to="/nearbyplaces">Show More</Link> {/* Use Link to navigate to NearPlacesAll */}</p>
      <div className='popular-destination'>
        {nearbyPlaces.map((place, index) => (
          <Item
            key={index}
            id={place.id}
            name={place.name}
            photo={place.photo}
            address={place.address}
            status={place.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;