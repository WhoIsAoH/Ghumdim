import React, { useEffect } from 'react'
import './Popular.css'
import popular_destination from '../Assets/populardestination'
import Item from '../Items/Item'
import { useParams } from 'react-router-dom'
import Axios from 'axios';


const Popular = () => {
  const { destinationId } = useParams();

  // const [isCurrentLocation, setIsCurrentLocation] = useState(false); // New state for checkbox

  // useEffect(() => {
  //   if (isCurrentLocation && "geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setDestinationData({
  //         ...destinationdata,
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude
  //       });

  //     });
  //   } else {
  //     setDestinationData({
  //       ...destinationdata,
  //       latitude: '',
  //       longitude: ''
  //     })

  //   }
  // }, [isCurrentLocation]);

  // useEffect(() => {
  //   if (destinationId) {
  //     Axios.get(`http://localhost:8080/ghumdim/viewDestinationsSortedByDistance?userLatitude=0&userLongitude=0`).then((res) => {
  //       console.log(res.data,);
  //       setAllDestination(res.data);
  //     })
  //       .catch((error) => {
  //         console.error('error fetching data', error);
  //       });
  //   }
  // }, []);

  return (
    <div className='popular'>
      <h1>Places Near You</h1>
      <hr />
      <div className='popular-destination'>
        {popular_destination.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} address={item.address} status={item.status} />
        })}
      </div>
    </div>
  )
}

export default Popular
