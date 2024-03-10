import React from 'react'
import './RelatedDestination.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'
const RelatedDestination = () => {
    return (
        <div className='relateddestinations'>
            <h1>RelatedProducts</h1>
            <hr />
            <div className="relateddestination-item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} address={item.address} />
                })}
            </div>
        </div>
    )
}

export default RelatedDestination
