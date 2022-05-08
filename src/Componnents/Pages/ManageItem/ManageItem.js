import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./ManageItem.css";

const ManageItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  console.log(item)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const url = `https://habib-car-house.herokuapp.com/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);


  const handleDeliverBtn = () =>{
    const Quantity = Number(item.Quantity)
    let updateQuantity = Quantity - 1
    const data = {
        Dealers: item.Dealers,
        Description: item.Description,
        Image: item.Image,
        Price: item.Price,
        Quantity: updateQuantity
    }
    const url = `https://habib-car-house.herokuapp.com/item/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result){
         toast('Your Qunatity Updated')
        }
      });
  }




  const onSubmit = (data) => {
    const url = `https://habib-car-house.herokuapp.com/item/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result){
          toast('Your Product Restock Successfully!!!')
        }
      });
    reset()
  };

  return (
    <div className="main_container_sec p-4 container">
      <div className="product_container">
        <div className="product_section_title">
          <h3 className="manage_title_text mb-4">Product Details</h3>
        </div>
        <div  className="item_name ">
          <h4>{item.Name}</h4>
          <h4>{item.Price}</h4>
        </div>
        <div className="item_image">
          <img src={item.Image} alt="" />
        </div>
        <div className="item_description">
          <p className="text">{item.Description}</p>
        </div>
        <div className="single_description_area my-3">
          <h5 className="dealers_text">Dealers: {item.Dealers}</h5>
          <h5 className="quantity_text">Quantity: {
            item.Quantity > 0 ? item.Quantity : <p className="text-danger ">Stock Out</p>
          }</h5>
        </div>
        <div className="mt-4  mb-2 deliverd_btn">
          <button onClick={handleDeliverBtn} className="d_btn">
            Delivered Item
          </button>
        </div>
      </div>
      <div className="update_container">
        <div className="section_title">
          <h3 className="manage_update_title_text mb-4">Update Your Product</h3>
        </div>
        <form
          className="d-flex flex-column input_form_container "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="mb-3 p-2 "
            type="text"
            placeholder="Item Name"
            {...register("Name", { required: true })}
          />
          <input
            className="mb-3 p-2"
            type="text"
            placeholder="Item Description"
            {...register("Description", { required: true })}
          />
          <input
            className="mb-3 p-2"
            type="text"
            placeholder="Item Image Link"
            {...register("Image", { required: true })}
          />
          <input
            className="mb-3 p-2"
            type="text"
            placeholder="Dealer Name"
            {...register("Dealers", { required: true })}
          />
          <input
            className="mb-3 p-2"
            type="text"
            placeholder="Price"
            {...register("Price", { required: true })}
          />
          <input
            className="mb-3 p-2"
            type="text"
            placeholder="Item Quantity"
            {...register("Quantity", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <input className="mb-3 p-2" type="submit" value="Restock Item" />
        </form>
      </div>
    </div>
  );
};

export default ManageItem;
