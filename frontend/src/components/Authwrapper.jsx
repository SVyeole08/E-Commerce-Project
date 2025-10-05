import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { asynccurrentuser } from "../store/actions/UserActions";

const Authwrapper = (props) => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // If we already have a user in the store, mark as checked.
    if (users) {
      setChecked(true);
      return;
    }

    // Attempt to restore user from localStorage / backend before deciding to redirect.
    // Dispatch the async loader and mark checked when it finishes.
    dispatch(asynccurrentuser()).finally(() => setChecked(true));
  }, [users, dispatch]);

  // While we are restoring auth state, render nothing (or a loader) to avoid
  // an immediate redirect to /login. Once `checked` is true we can decide.
  if (!checked) return null;

  return users ? props.children : <Navigate to={"/login"} replace />;
};

export default Authwrapper;
