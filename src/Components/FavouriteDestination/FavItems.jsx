import React, { useContext } from 'react'
import './FavItems.css'
import { DestinationContext } from '../../Context/DestinationContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const FavItems = () => {

    const { all_destiantion, cartItems, removeFromCart, addToCart } = useContext(DestinationContext);
    return (
        <div className='favitems'>
            <div className='favtitems-format-main'>
                <p>Destinations</p>
                <p>Title</p>
                <p>Category</p>
                <p>Address</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_destiantion.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="favitems-format">
                            <img src={e.image} alt="" className='favicon-destination-icon' />
                            <p>{e.name}</p>
                            <p>{e.category}</p>
                            <p>{e.address}</p>
                            {/* <button className='favitems-quantity'></button>
                            <p></p> */}
                            <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />

                    </div>
                }
            })}
        </div>
    )
}

export default FavItems
