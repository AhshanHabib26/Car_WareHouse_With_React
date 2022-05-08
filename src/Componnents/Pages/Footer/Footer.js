import React from "react";
import "./Footer.css";
import PhoneImg from "../../../Images/phone-call.png";
import EmailImg from "../../../Images/email.png";
import LocationImg from "../../../Images/google-maps.png";

const date = new Date()
const newYear = date.getFullYear()

const Footer = () => {
  return (
    <div className="main_footer_container">
      <div className="contact_info_container">
        <div className="contuct_us_details">
          <h3 className="my-3 text-center text-muted">Contact Us</h3>
          <p className="text-center mb-5 text-muted ">
            If You Have Face Any Problem Or Any Query For Our Service. Please!
            Feel Free And Ak Me. I Will Reply As Soon As Possible.
          </p>
        </div>
        <div className="info_box">
          <div className="phone_img">
            <img className="footer_icons_thumb" src={PhoneImg} alt="" />
          </div>
          <div className="info_details">
            <h5 className="text-muted">Contact Number</h5>
            <p className="text-muted">+880 - 1646418365</p>
          </div>
        </div>
        <div className="info_box">
          <div className="phone_img">
            <img className="footer_icons_thumb" src={EmailImg} alt="" />
          </div>
          <div className="info_details">
            <h5 className="text-muted">Email Address</h5>
            <p className="text-muted">habib.net27@gmail.com</p>
          </div>
        </div>
        <div className="info_box">
          <div className="phone_img">
            <img className="footer_icons_thumb" src={LocationImg} alt="" />
          </div>
          <div className="info_details">
            <h5 className="text-muted">Address</h5>
            <p className="text-muted">Narayangonj, Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="details_info">
        <div className="shortcut_link_container">
          <div className="our_info_sec">
              <div className="our_info_title">
                  <h4 className="title_text">Our Info</h4>
              </div>
            <ul>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Our Items</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="our_quick_sec">
              <div className="our_quick_title">
                  <h4 className="title_text">Quick Link</h4>
              </div>
            <ul>
              <li>Home</li>
              <li>Manage Services</li>
              <li>Explore Items</li>
              <li>Our Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="our_blog_sec">
              <div className="our_blog_title">
                  <h4 className="blog_title_text">Letest Blog</h4>
              </div>
            <ul>
              <li>Chevrolet Malibu 2018 LT</li>
              <li>2014 Ford Mustang 4.0 AT</li>
              <li>Bugatti Chiron Super Sport 300+</li>
              <li>Pagani Huayra BC Roadster</li>
              <li>Nissan Versa, LEATHER</li>
            </ul>
          </div>
        </div>
        <div className="copy_right_area">
            <p>Copyright © {newYear} - 2025. All Rights Reserved. by Ahshan Habib</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
