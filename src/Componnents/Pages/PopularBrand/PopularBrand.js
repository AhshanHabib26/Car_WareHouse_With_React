import React from "react";
import brandImg from "../../../Images/Brand/Brand (1).jpg";
import brandImg1 from "../../../Images/Brand/Brand (2).jpg";
import brandImg3 from "../../../Images/Brand/Brand (4).jpg";
import brandImg4 from "../../../Images/Brand/Brand (5).jpg";
import brandImg5 from "../../../Images/Brand/Brand (6).jpg";
import brandImg6 from "../../../Images/Brand/Brand (7).jpg";
import "./PopularBrand.css";

const PopularBrand = () => {
  return (
    <div className="container">
      <h3 className="branding_title">Popular Top Selling Brand</h3>
      <div className="popular_branding_container">
        <div className="mb-3">
          {" "}
          <img src={brandImg4} alt="" />
        </div>
        <div className="mb-3">
          {" "}
          <img src={brandImg} alt="" />
        </div>
        <div className="mb-3">
          {" "}
          <img src={brandImg3} alt="" />
        </div>
        <div className="mb-3">
          {" "}
          <img src={brandImg1} alt="" />
        </div>
        <div className="mb-3">
          {" "}
          <img src={brandImg6} alt="" />
        </div>
        <div className="mb-3">
          {" "}
          <img src={brandImg5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PopularBrand;
