import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  return (
    <nav className="flex items-center justify-center gap-x-5 font-thin p-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Products">Products</NavLink>
      {user ? (
        <>
          <NavLink to="/admin/create-product">Create Product</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/Login">Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Nav;
