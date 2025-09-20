import axios from "../../api/axiosconfig";
import { loaduser } from "../reducers/UserSlice";

export const asynccurrentuser = (user) => async (dispatch, getState) => {
  try {
    JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loaduser(user));
    else console.log("User is not logged in!!");
  } catch (error) {
    console.log(error);
  }
};
export const asynclogoutuser = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    console.log("User logged out!!");
  } catch (error) {
    console.log(error);
  }
};

export const asyncloginuser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/user?email=${user.email}&password=${user.password}`
    );
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};

export const asyncregisterusers = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    dispatch(loaduser(res.users));
  } catch (error) {
    console.log(error);
  }
};
