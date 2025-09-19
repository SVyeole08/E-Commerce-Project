import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center justify-center gap-x-5 font-thin p-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Products">Products</NavLink>
      <NavLink to="/Login">Login</NavLink>
      
    </nav>
  );
};

export default Nav;
 