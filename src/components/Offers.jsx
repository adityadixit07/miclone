import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Offer from "./Offer";
import '../styles/offer.css'
const Offers = ({offer}) => {
  return(
     <div className="offer-section">
    {
        offer.map((item,index)=>(
            <Offer key={item.image} index={index} src={item.image} link={item.url} />
        ))
    }
  </div>);
};

export default Offers;
