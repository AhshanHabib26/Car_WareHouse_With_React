import React from "react";
import { useForm } from "react-hook-form";
import "./AddNewItem.css";
import AddImage from "../../../Images/add_product.png";
import { toast } from "react-toastify";

const AddNewItem = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const url = "https://habib-car-house.herokuapp.com/item";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast('Your Product Added')
      });
    console.log(data);
  };

  return (
    <div className="add_new_item_container my-3 container">
      <div className="add_image_container">
        <img className="add_image" src={AddImage} alt="" />
      </div>
      <div className="add_items_container">
        <div className="text-center">
          <h3 className="item_title_text mb-4">Add New Product</h3>
        </div>
        <div>
          <form
            className="d-flex flex-column add_input_form_container "
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="mb-4 p-2 "
              type="text"
              placeholder="Item Name"
              {...register("Name", { required: true })}
            />
            <input
              className="mb-4 p-2"
              type="text"
              placeholder="Item Description"
              {...register("Description", { required: true })}
            />
            <input
              className="mb-4 p-2"
              type="text"
              placeholder="Item Image Link"
              {...register("Image", { required: true })}
            />
            <input
              className="mb-4 p-2"
              type="text"
              placeholder="Dealer Name"
              {...register("Dealers", { required: true })}
            />
            <input
              className="mb-3 p-2"
              type="text"
              placeholder="Item Quantity"
              {...register("Quantity", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <input className="mt-3 p-2" type="submit" value="Add Item" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewItem;
