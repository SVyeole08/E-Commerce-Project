import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Unauthwrapper from "../components/Unauthwrapper";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const Pageerror = lazy(() => import("../Pageerror"));
const Register = lazy(() => import("../pages/Register"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"));
const ProfileUser = lazy(() => import("../pages/user/ProfileUser"));
const Cart = lazy(() => import("../pages/user/Cart"));
const Authwrapper = lazy(() => import("../components/Authwrapper"));

const Mainroutes = () => {
  const { users } = useSelector((state) => state.userReducer);
  return (
    <Routes>
      <Route path="/" element={users ? <Products /> : <Home />} />

      <Route
        path="/login"
        element={
          <Unauthwrapper>
            <Login />
          </Unauthwrapper>
        }
      />
      <Route
        path="/register"
        element={
          <Unauthwrapper>
            <Register />
          </Unauthwrapper>
        }
      />

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
      <Route
        path="/cart"
        element={
          <Authwrapper>
            <Cart />
          </Authwrapper>
        }
      />

      <Route path="*" element={<Pageerror />} />
    </Routes>
  );
};

export default Mainroutes;
