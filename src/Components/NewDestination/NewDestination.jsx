import React from 'react'
import './NewDestination.css'
import new_destinations from '../Assets/new_destinations'
import Item from '../Items/Item'

const NewDestination = () => {
  return (
    <div className='new-destination'>
      <h1>New Destinations</h1>
      <hr />
      <div className="newdestinations-list">
        {new_destinations.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} address={item.address}/>
        })}
      </div>
    </div>
  )
}

export default NewDestination
