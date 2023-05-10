import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = ({start}) => {
  return (
    <Carousel className='main' fade indicators={false}>
        {
            start.map((item,index)=>(
                <Carousel.Item>
                <img className='d-block w-100' src={item} alt=""/>
                </Carousel.Item>
            ))
        }
    </Carousel>
  )
}

export default Slider