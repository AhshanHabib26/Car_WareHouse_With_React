import React from "react";
import "./OurTeam.css";
import TeamImg1 from "../../../Images/Our Team/Team_1.png";
import TeamImg2 from "../../../Images/Our Team/Team_2.png";
import TeamImg3 from "../../../Images/Our Team/Team_3.png";
import TeamImg4 from "../../../Images/Our Team/Team_4.png";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaPinterestSquare, FaTwitterSquare } from "react-icons/fa";

const OurTeam = () => {
  return (
    <div className=" my-5 our_team_container">
      <div className="title_container">
        <h3 className="meet_title">Meet Our Team</h3>
      </div>
      <div className="team_container">
        <div className="card_container">
          <div className="card_img">
            <img className="card_img_container" src={TeamImg1} alt="" />
          </div>
          <div className="card_details">
            <div className="card_title">
              <h4 className="title_heading"> Ahshan Habib</h4>
              <p className="email">info.habib@gmail.com</p>
            </div>
            <div className="social_icons">
              <div>
                <AiFillFacebook />
              </div>
              <div>
                <AiFillLinkedin />
              </div>
              <div>
                {" "}
                <FaPinterestSquare />
              </div>
              <div>
                <FaTwitterSquare />
              </div>
            </div>
          </div>
        </div>
        <div className="card_container">
          <div className="card_img">
            <img src={TeamImg2} alt="" />
          </div>
          <div className="card_details">
            <div className="card_title">
              <h4 className="title_heading">Alex Pandey</h4>
              <p className="email">info.alex@gmail.com</p>
            </div>
            <div className="social_icons">
              <div>
                <AiFillFacebook />
              </div>
              <div>
                <AiFillLinkedin />
              </div>
              <div>
                {" "}
                <FaPinterestSquare />
              </div>
              <div>
                <FaTwitterSquare />
              </div>
            </div>
          </div>
        </div>
        <div className="card_container">
          <div className="card_img">
            <img src={TeamImg3} alt="" />
          </div>
          <div className="card_details">
            <div className="card_title">
              <h4 className="title_heading">Anny Rich</h4>
              <p className="email">info.anny@gmail.com</p>
            </div>
            <div className="social_icons">
              <div>
                <AiFillFacebook />
              </div>
              <div>
                <AiFillLinkedin />
              </div>
              <div>
                {" "}
                <FaPinterestSquare />
              </div>
              <div>
                <FaTwitterSquare />
              </div>
            </div>
          </div>
        </div>
        <div className="card_container">
          <div className="card_img">
            <img src={TeamImg4} alt="" />
          </div>
          <div className="card_details">
            <div className="card_title">
              <h4 className="title_heading">Alex Smith</h4>
              <p className="email">info.smith@gmail.com</p>
            </div>
            <div className="social_icons">
              <div>
                <AiFillFacebook />
              </div>
              <div>
                <AiFillLinkedin />
              </div>
              <div>
                {" "}
                <FaPinterestSquare />
              </div>
              <div>
                <FaTwitterSquare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
