import React, { useContext } from 'react'
import './CSS/Category.css'
import { DestinationContext } from '../Context/DestinationContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'

const Category = (props) => {
  
  const { all_destination } = useContext(DestinationContext);
  return (
    <div className='destination-category'>
      <div className='destiantioncategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 destinations
        </p>
        <div className="destinationcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="destinationcategory-places">
        {all_destination.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} address={item.address} />
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="destinationcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default Category

