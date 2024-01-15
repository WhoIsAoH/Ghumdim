import React from 'react'
import destination_category from '../Assets/destinationcategory'
import Item from '../Items/Item'
import './Destination.css'

const Destinations = () => {
  return (

    <div className='destination'>
        <h1>Destinations</h1>
        <hr/>
        <div className='destination-list'>
            {destination_category.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} address={item.address}/>
            })}
        </div>
    </div>
  )
}

export default Destinations
