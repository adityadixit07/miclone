import React from "react";
import HotItemCard from "./HotItemCard";
import '../styles/hotaccessContent.css'

const HotaccessoriesContent = ({ music, musicCover,smartDevice,smartDeviceCover,home,homeCover,lifestyle,lifestyleCover,mobileaccessories,mobileaccessoriesCover }) => {
  return (
    <div className="hotaccessContent">
      <div>
        <img src={musicCover || smartDeviceCover || homeCover||lifestyleCover||mobileaccessoriesCover} alt="musicCover" />
      </div>
      <div>
        {/* music */}
        {
          music && music.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          ))
        }
        {/* smart device */}
        {
          smartDevice && smartDevice.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          ))
        }
        {/* home */}
        {
          home && home.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          ))
        }
        {/* lifestyle */}
        {
          lifestyle && lifestyle.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          ))
        }
        {/*  mobileaccessories */}
         {
          mobileaccessories && mobileaccessories.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          ))
        }
        {/* for browse more section */}
        {/* <HotItemCard  /> */}
      </div>
    </div>
  );
};

export default HotaccessoriesContent;
