import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase_init";
import './MyItems.css'

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const email = user?.email;
    const url = `https://habib-car-house.herokuapp.com/additem?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user, items]);

  const handelDelete = (id) =>{
    const procceed = window.confirm("Are You Sure You Want To Delete?");
    if (procceed) {
      console.log(id);
      const url = `https://habib-car-house.herokuapp.com/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const existFood = items.filter((item) => item._id !== id);
            setItems(existFood);
            alert("Delete Successfully!");
          }
        });
    }
  }



  return (
    <div>
      <div className="title_container text-center my-5 text-muted ">
        {items.length > 0 ? (
          <h4>
            Your Added Item :{" "}
            <span className="text-danger fw-bolder">{items.length}</span>{" "}
          </h4>
        ) : (
          <h4>You Have No Added Product</h4>
        )}
      </div>
      <Table className="container my-5">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {
                items.map(item => <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.Name}</td>
                    <td>{item.Price}</td>
                    <td>{item.Quantity}</td>
                    <td onClick={handelDelete} className="text-center delete_btn">Delete</td>
                  </tr>
                  )
            }
        </tbody>
      </Table>
    </div>
  );
};

export default MyItems;
