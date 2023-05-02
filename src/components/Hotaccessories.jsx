import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/hotaccessories.css'
const Hotaccessories = ({text}) => {
  return (
    <div className='hotaccessories'>
            <Link className='hotaccessoriesLink' to="/music">Music store</Link>
            <Link className='hotaccessoriesLink'to="/smartdevice">Smart device</Link>
            <Link className='hotaccessoriesLink' to="/home">Home</Link>
            <Link className='hotaccessoriesLink' to="/lifestyle">Lifestyle</Link>
            <Link className='hotaccessoriesLink' to="mobileaccessories">Mobile Accessories</Link>
    </div>
  )
}

export default Hotaccessories