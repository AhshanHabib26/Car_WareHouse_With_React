import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImg from "../../../Images/PageNotFound.gif";
import './PageNotFound.css'

const PageNotFound = () => {
    const navigate = useNavigate()
    const handleBackBtn = () =>{
        navigate('/')
    }
  return (
    <div className="container">
      <div>
        <img className=" d-flex mx-auto  my-4" src={NotFoundImg} alt="" />
      </div>
      <button onClick={handleBackBtn} className="pageBack" >Back To Home</button>
    </div>
  );
};

export default PageNotFound;
