import React from 'react'
import '../styles/Navcard.css'

const Navcard = ({name,price,image,index}) => {
  return (
    <div className='navcard'>
        <img src={image} alt={`${index} phone`} />
        <p>{name}</p>
        <h3>{price}</h3>
    </div>
  )
}

export default Navcard