import React from 'react'
// import { Carousel } from 'react-responsive-carousel'
// import {Carousel} from 'react-bootstrap/Carousel'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/slider.css'
const Slider = ({start}) => {
  return (
    <Carousel className='main' fade>
        {/* <Carousel.Item className='item '>

            <img className='d-block w-100 ' src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Caption className='caption'>
            <h3>Heading</h3>
            <p>Desc</p>
        </Carousel.Caption > */}
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