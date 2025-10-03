import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Authwrapper = (props) => {
  const { users } = useSelector((state) => state.userReducer);
  return users ? props.children : <Navigate to={"/login"} />;
};
export default Authwrapper;
