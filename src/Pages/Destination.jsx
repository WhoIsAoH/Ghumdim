import React, { useContext } from 'react'
import { DestinationContext } from '../Context/DestinationContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';

const Destination = () => {

  const { all_destination } = useContext(DestinationContext);
  const { destinationId } = useParams();
  const destination = all_destination.find((e) => e.id == Number(destinationId));
  return (
    < div >
      <Breadcrum destination={destination} />
    </div >
  )
}

export default Destination
