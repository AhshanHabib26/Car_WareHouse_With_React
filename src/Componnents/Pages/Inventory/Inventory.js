import React from "react";
import { Link } from "react-router-dom";
import useItemLoad from "../../../Hooks/useItemLoad";
import InventoryProduct from "../InventoryProduct/InventoryProduct";
import "./Inventory.css";

const Inventory = () => {
  const [items] = useItemLoad();
  const sliceItems = items.slice(0, 6);

  return (
    <div className="container my-5">
      <div className="inventory_container">
        <div className="title_container">
          <h1 className="title_container_text">Browse Top Car</h1>
        </div>
        <div className="list_container">
          <Link className="list_container_text" to="/all_car_list">
            See All Car
          </Link>
        </div>
      </div>

      <div className="invntory_product_container my-5">
        {sliceItems.map((item) => (
          <InventoryProduct item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
