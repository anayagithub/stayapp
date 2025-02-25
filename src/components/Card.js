import React from 'react'
import star from './star.png' 

export default function Card(props) {
  return (
    <div className='card'>
         <img className='card-img' src={props.img}/>
        <div className='card-stats'>
          <img className='card-star'src={star}/>
          <span >{props.rating}</span>
          <span className='gray'>({props.reviewCount}) •</span>
         <span className='gray'>{props.location}</span>
        </div>
        <div className='card-title'>
            <p>{props.title}</p>
            <p>
                <span className='card-price'>From ${props.price}</span> /person
            </p>
        </div>
       
      </div>
  )
}
