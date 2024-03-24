import React, { useState, useEffect } from 'react'
import './CSS/Category.css'
// import { DestinationContext } from '../Context/DestinationContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'
import Axios from 'axios';

const Category = (props) => {

  const [alldestination, setAllDestination] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8080/ghumdim/viewAllDestination").then((res) => {
      console.log(res.data);
      setAllDestination(res.data);
    })
      .catch((error) => {
        console.error('error fetching data', error);
      });
  }, []);

  // const { all_destination } = useContext(DestinationContext);
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

        {alldestination.map((item, i) => {
          // console.log(alldestination + "address");

          if (props.category.toLowerCase() === item.category.toLowerCase()) {

            return <Item key={i} id={item.id} name={item.name} photo={item.photo} address={item.address} status={item.status} />
          }
          else {
            return null;
          }
        })}

        {/* {all_destination.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} address={item.address} />
          }
          else {
            return null;
          }
        })} */}
      </div>
      {/* <div className="destinationcategory-loadmore">
        Explore More
      </div> */}
    </div>
  )
}

export default Category

