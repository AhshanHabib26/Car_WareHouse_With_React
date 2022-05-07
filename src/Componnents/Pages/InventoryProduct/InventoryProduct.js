import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./InventoryProduct.css";

const InventoryProduct = ({ item }) => {
  const { Name, Image, Price, Dealers, Description, Quantity, _id } = item;
  const sliceDescription = Description.slice(0, 70);
  const navigate = useNavigate()
  const location = useLocation()

  let from = location.state?.from?.pathname || "/";

  const handleUpdateBtn = () =>{
    const success = window.confirm('Do You Want Update Your Product')
    if(success){
      navigate(from, { replace: true });
    }
    else{
      return toast('Please Try Again')
    }
  }

  return (
    <div className="single_item_container">
      <div className="single_title_container">
        <h3 className="single_Name">{Name}</h3>
        <h5 className="single_price">{Price}</h5>
      </div>
      <div className="single_img_container">
        <img src={Image} alt="" />
      </div>
      <div className="single_description_area my-3">
        <h5 className="dealers_text">Dealers: {Dealers}</h5>
        <h5 className="quantity_text">Quantity: {Quantity}</h5>
      </div>
      <div className="item_description_area">
        <p className="description_area_text">{sliceDescription}</p>
        <div className="mt-5 d-flex justify-content-around mb-3 update_btn">
          <Link onClick={handleUpdateBtn} to={`/manage-stock/${_id}`}>Update Item</Link>
          <Link to="/all_car_list">Manage Inventories</Link>
        </div>
      </div>
    </div>
  );
};

export default InventoryProduct;
