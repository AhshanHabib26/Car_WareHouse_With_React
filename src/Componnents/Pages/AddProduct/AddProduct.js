import React from "react";
import { useForm } from "react-hook-form";
import AddTask from "../../../Images/Add tasks.png";
import { toast } from "react-toastify";
const imageAPIKey = "672a876c49a0abb50cb4f6680c0f73d4";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const Image = data.Image[0];
    const formData = new FormData();
    formData.append("image", Image);
    const APIurl = `https://api.imgbb.com/1/upload?key=${imageAPIKey}`;
    fetch(APIurl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          const Image = response.data.url;
          const dataInfo = {
            Name: data.Name,
            Description: data.Description,
            Dealers: data.Dealers,
            Price: data.Price,
            Image: Image,
            Quantity: data.Quantity,
          };

          const url = "https://habib-car-house.herokuapp.com/item";
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(dataInfo),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.insertedId) {
                toast("Your Product Successfully Added");
              }
              reset();
            });
        }
      });
  };

  return (
    <div className="add_new_item_container my-3 container">
      <div className="add_image_container">
        <img className="add_image" src={AddTask} alt="" />
      </div>
      <div className="add_items_container">
        <div className="text-center">
          <h3 className="Additem_title_text mb-4">Add New Product</h3>
        </div>
        <div>
          <form
            className="d-flex flex-column add_input_form_container "
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
              type="file"
              placeholder="Product Image"
              {...register("Image", { required: true })}
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

export default AddProduct;
