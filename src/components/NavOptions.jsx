import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Navcard from './Navcard'
import '../styles/Navoptions.css'


const NavOptions = ({miPhones,redmiPhones,tv,laptops,fitnessAndLifestle,home,audio,accessories}) => {
  const[miPhonesToggle,setmiPhonesToggle]=useState(false);
  const[redmiPhonesToggle,setredmiPhonesToggle]=useState(false);
  const[tvToggle,settvToggle]=useState(false);
  const[laptopToggle,setlaptopToggle]=useState(false);
  const[fitnessAndLifestleToggle,setfitnessAndLifestleToggle]=useState(false);
  const[homeToggle,sethomeToggle]=useState(false);
  const[audioToggle,setaudioToggle]=useState(false);
  const[accessoriesToggle,setaccessoriesToggle]=useState(false);
  useEffect(() => {
     
    if(window.location.pathname === "/miphones"){
        return   setmiPhonesToggle(true)
       }
     if(window.location.pathname === "/redmiphones"){
        return   setredmiPhonesToggle(true)
       }
       if(window.location.pathname === "/tv"){
        return   settvToggle(true)
       }
       if(window.location.pathname === "/laptops"){
        return   setlaptopToggle(true)
       }
       if(window.location.pathname === "/lifestyle"){
        return  setfitnessAndLifestleToggle(true)
       }
       if(window.location.pathname === "/home"){
        return  sethomeToggle(true)
       }
       if(window.location.pathname === "/audio"){
        return  setaudioToggle(true)
       }
       
       if(window.location.pathname === "/accessories"){
        return  setaccessoriesToggle(true)
       }

       
   }, [])
  return (
    <div className='navoptions'>
      {
        miPhonesToggle?miPhones.map((item)=>(
          <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
        )):null
      } {
        redmiPhonesToggle?redmiPhones.map((item)=>(
          <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
        )):null
      } {
        tvToggle?tv.map((item)=>(
          <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
        )):null
      } {
        laptopToggle?laptops.map((item)=>(
          <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
        )):null
      } {
        fitnessAndLifestleToggle?fitnessAndLifestle.map((item)=>(
          <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
        )):null
      } {
        homeToggle?home.map((item)=>(
          <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
        )):null
      } {
        audioToggle?audio.map((item)=>(
          <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
        )):null
      } {
        accessoriesToggle?accessories.map((item)=>(
          <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
        )):null
      }
    </div>
  )
}

export default NavOptions