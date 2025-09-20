import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Pageerror from "../Pageerror";
import Register from "../pages/Register";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="*" element={<Pageerror />} />
    </Routes>
  );
};

export default Mainroutes;
