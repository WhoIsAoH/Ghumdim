import React, { useContext } from 'react'
import { DestinationContext } from '../Context/DestinationContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import DestinationDisplay from '../Components/DestinationDisplay/DestinationDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedDestination from '../Components/RelatedDestination/RelatedDestination';


const Destination = () => {

  const { all_destination } = useContext(DestinationContext);
  const { destinationId } = useParams();
  const destination = all_destination.find((e) => e.id == Number(destinationId));
  return (
    < div >
      <Breadcrum destination={destination} />
      <DestinationDisplay destination={destination} />
      <DescriptionBox />
      <RelatedDestination />
    </div >
  )
}

export default Destination
