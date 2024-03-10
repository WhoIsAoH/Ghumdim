import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={'/destination/${props.id}'}><img src={props.image} alt="" /></Link>
      {/* <img src={props.image} alt="" /> */}
      <p>{props.name}</p>
      <p>{props.address}</p>
    </div >
  )
}

export default Item
