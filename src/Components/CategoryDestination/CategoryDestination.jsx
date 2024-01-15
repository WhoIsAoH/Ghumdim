import React from 'react'
import './CategoryDestination.css'
import c1_img from '../Assets/Syambhunath.jpg'

const CategoryDestination = () => {
    return (
        <div className='category-top'>
            <div className='all'>
                <button>
                    All
                </button>
            </div>
            <div className="relgious">
                <img src={c1_img} alt="" />
                <p>Relogious Places</p>
            </div>

            <div className="parks">
                <img src={c1_img} alt="" />
                <p>Parks</p>
            </div>

            <div className="hike">
                <img src={c1_img} alt="" />
                <p>Hiking</p>
            </div>

        </div>
    )
}

export default CategoryDestination
