import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { asynccurrentuser } from "../store/actions/UserActions";

const Unauthwrapper = (props) => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (users) {
      setChecked(true);
      return;
    }
    dispatch(asynccurrentuser()).finally(() => setChecked(true));
  }, [users, dispatch]);

  if (!checked) return null;

  return !users ? props.children : <Navigate to={"/"} replace />;
};

export default Unauthwrapper;
