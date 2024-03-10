import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>
                    Description
                </div>

                <div className="descriptionbox-nav-box fade">
                    Reviews (122)
                </div>
            </div>

            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid mollitia eum, iste et itaque vitae maxime nostrum. Incidunt quas recusandae rerum quidem, maxime, veniam libero veritatis dignissimos consectetur dolores iure?</p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, dolorem?</p>
            </div>
        </div>
    )
}

export default DescriptionBox
