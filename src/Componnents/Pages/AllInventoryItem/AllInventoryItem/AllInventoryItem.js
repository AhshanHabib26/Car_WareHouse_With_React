import React from "react";
import { Link } from "react-router-dom";

const AllInventoryItem = ({ item }) => {
  const { Name, Image, Price, Dealers, Description, Quantity, _id } = item;
  const sliceDescription = Description.slice(0, 70);

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
        <div className="mt-4 d-flex justify-content-around  mb-2 update_btn">
          <Link to={`/manage-stock/${_id}`}>Update Item</Link>
          <Link to='/add-new-item'>Add New Item</Link>
        </div>
      </div>
    </div>
  );
};

export default AllInventoryItem;
