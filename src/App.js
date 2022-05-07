import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Componnents/Pages/Home/Home";
import Header from "./Componnents/Pages/Header/Header";
import Blog from "./Componnents/Pages/Blog/Blog";
import Signup from "./Componnents/Pages/Register/Signup/Signup";
import Login from "./Componnents/Pages/Register/Login/Login";
import AllInventoryItems from "./Componnents/Pages/AllInventoryItem/AllInventoryItems/AllInventoryItems";
import ManageItem from "./Componnents/Pages/ManageItem/ManageItem";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./Componnents/RequireAuth/RequireAuth";
import AddNewItem from "./Componnents/Pages/AddNewItem/AddNewItem";
import Footer from "./Componnents/Pages/Footer/Footer";
import MyItems from "./Componnents/Pages/MyItems/MyItems/MyItems";
import PageNotFound from "./Componnents/Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/all_car_list"
          element={
            <RequireAuth>
              <AllInventoryItems />
            </RequireAuth>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-new-item" element={<AddNewItem />} />
        <Route
          path="/my-items"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route
          path="/manage-stock/:id"
          element={
            <RequireAuth>
              <ManageItem />
            </RequireAuth>
          }
        />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
