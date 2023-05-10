import React from "react";
import Prenavbar from "./components/Prenavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import "./App.css";
import data from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProducts from "./components/StarProducts";
import Hotaccessories from "./components/Hotaccessories";
import HotaccessoriesContent from "./components/HotaccessoriesContent";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOptions from "./components/NavOptions";
function App() {
  return (
    <BrowserRouter>
      <Prenavbar />
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptops={data.laptop} fitnessAndLifestle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}  />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="Star Products" />
      <StarProducts starProduct={data.starProduct} />
      <Heading text="Hot Accessories" />
      <Hotaccessories />
      <Routes>
        {/* music  */}
        <Route
          exact
          path="/music"
          element={
            <HotaccessoriesContent
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        {/* smart devices */}
        <Route
          exact
          path="/smartdevice"
          element={
            <HotaccessoriesContent
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        {/* home */}
        <Route
          exact
          path="/home"
          element={
            <HotaccessoriesContent
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
        {/* lifestyle */}
        <Route
          exact
          path="/lifestyle"
          element={
            <HotaccessoriesContent
              lifestyle={data.hotAccessories.lifeStyle}
              lifestyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        {/* mobileaccessories */}
        <Route
          exact
          path="/mobileaccessories"
          element={
            <HotaccessoriesContent
            mobileaccessories={data.hotAccessories.mobileAccessories}
            mobileaccessoriesCover={data.hotAccessoriesCover.mobileAccessories}
            />
          }
        />
      </Routes>
      {/* product review */}
      <Heading text="Product Reviewss" />
      <ProductReviews productReviews={data.productReviews} />

      <Heading text="Videos" />
      <Videos videos={data.videos} />

      <Heading text="In the Press" />
      <Banner banner={data.banner} />

      <Footer footer={data.footer}/>
      
    </BrowserRouter>
  );
}

export default App;
