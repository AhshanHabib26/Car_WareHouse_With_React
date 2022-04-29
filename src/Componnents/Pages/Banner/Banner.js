import React from "react";
import BannerImg from "../../Images/Banner.png";
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner_container">
      <img className="w-100 img-fluid" src={BannerImg} alt="" />
      <div className="banner_text_container">
          <h2 className="text_container_slogan">Best Car Dealer</h2>
          <h1 className="text_container_title">Popular Vehicle Dealership With Explore Car<span className="logo_text">House</span> </h1>
          <button className="banner_btn mt-3">Explore More </button>
      </div>
      
    </div>
  );
};

export default Banner;
