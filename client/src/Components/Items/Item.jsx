import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {

  const { showCosine, showDistance } = props;

  return (
    <div className='item'>
      <Link to={`/destination/${props.id}`}>{<img src={`https://firebasestorage.googleapis.com/v0/b/ghumdim-a934a.appspot.com/o/${props.photo}?alt=media`} alt="" />}</Link>
      <p>{props.name}</p>
      <p>{props.address}</p>
      <p>{props.status}</p>
      {showDistance && <p>Haversine Distance: {props.distanceValue}</p>}
      {showCosine && <p>Cosine Value: {props.cosineValue}</p>}
    </div >


  )
}

export default Item;
