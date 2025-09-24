import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  asynccurrentuser,
  asynclogoutuser,
} from "../store/actions/UserActions";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(asynccurrentuser());
  }, [dispatch]);
  const LogoutHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/");
  };
  return (
    <nav className="flex items-center justify-center gap-x-5 font-thin p-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Products">Products</NavLink>
      {user ? (
        <>
          <NavLink to="/admin/create-product">Create Product</NavLink>
          <button onClick={LogoutHandler}>Log Out</button>
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
