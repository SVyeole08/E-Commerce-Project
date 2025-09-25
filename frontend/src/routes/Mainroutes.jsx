import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Pageerror from "../Pageerror";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/admin/ProductDetails";
import { useSelector } from "react-redux";

const Mainroutes = () => {
  const {users} = useSelector(state => state.userReducer)
  return (
    <Routes>
      <Route path="/" element={users?<Products/>:<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/admin/create-product" element={<CreateProduct />} />
      <Route path="/Products/:id" element={<ProductDetails />} />
      <Route path="*" element={<Pageerror />} />
    </Routes>
  );
};

export default Mainroutes;
