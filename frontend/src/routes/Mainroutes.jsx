import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Pageerror from "../Pageerror";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/admin/ProductDetails";
import ProfileUser from "../pages/user/ProfileUser";
import Authwrapper from "../components/Authwrapper";

const Mainroutes = () => {
  const { users } = useSelector((state) => state.userReducer);
  return (
    <Routes>
      <Route path="/" element={users ? <Products /> : <Home />} />

      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />

      <Route
        path="/admin/create-product"
        element={
          <Authwrapper>
            <CreateProduct />
          </Authwrapper>
        }
      />
      <Route
        path="/admin/user-profile"
        element={
          <Authwrapper>
            <ProfileUser />
          </Authwrapper>
        }
      />
      <Route
        path="/Products/:id"
        element={
          <Authwrapper>
            <ProductDetails />
          </Authwrapper>
        }
      />

      <Route path="*" element={<Pageerror />} />
    </Routes>
  );
};

export default Mainroutes;
