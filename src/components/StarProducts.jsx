import React from 'react'
import '../styles/starproduct.css'

const StarProducts = ({starProduct}) => {
  return (
    <div className='startproducts'>
       <div> <a href={starProduct[0].url}><img src={starProduct[0].image} alt="prod-list" /></a></div>
       <div>
        <a href={starProduct[1].url}><img src={starProduct[1].image} alt="prod-list" /></a>
        <a href={starProduct[2].url}><img src={starProduct[2].image} alt="prod-list" /></a>
        <a href={starProduct[3].url}><img src={starProduct[3].image} alt="prod-list" /></a>
       </div>
    </div>
  )
}

export default StarProducts