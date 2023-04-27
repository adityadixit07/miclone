import React from 'react'
import '../styles/prenavbar.css'

const Prenavbar = () => {
  return (
    <div className='prenavbar'>
        <div>
            <a href="/mi">MI India <span>|</span></a>
            <a href="/miapp">GET MI store app <span>|</span></a>
            <a href="/help">Online help <span>|</span></a>
            <a href="/store">Retail Store <span></span></a>
        </div>
        <div>
            <a href="/signIN">Sign in <span>|</span></a>
            <a href="/signUp">Sign up<span>|</span></a>
            <a href="/cart">Cart(0)<span></span></a>
        </div>
    </div>
  )
}

export default Prenavbar