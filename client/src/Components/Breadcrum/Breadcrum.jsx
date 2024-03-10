import React from 'react'
import './Breadcrum.css'
// import { DestinationContext } from '../Context/DestinationContext'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {

    const { destination } = props;

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="" /> Destination <img src={arrow_icon} alt="" /> {destination.category} <img src={arrow_icon} alt="" />  {destination.name}
        </div>
    )
}

export default Breadcrum
