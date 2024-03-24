import React from 'react'
import './Popular.css'
import popular_destination from '../Assets/populardestination'
import Item from '../Items/Item'

const Popular = () => {
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
