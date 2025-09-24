import axios from "../../api/axiosconfig";
import { loaduser, removeuser } from "../reducers/UserSlice";

export const asynccurrentuser = () => async (dispatch) => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    if (Array.isArray(user)) {
      user = user[0] || null;
      if (user) localStorage.setItem("user", JSON.stringify(user));
    }
    if (user) dispatch(loaduser(user));
    else console.log("User is not logged in!!");
    console.log("Current user:", user);
  } catch (error) {
    console.log(error);
  }
};
export const asynclogoutuser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeuser());
    console.log("User logged out!!");
  } catch (error) {
    console.log(error);
  }
};

export const asyncloginuser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    const matchedUser = Array.isArray(data) ? data[0] : data;
    if (!matchedUser) {
      console.log("Invalid credentials");
      return;
    }
    localStorage.setItem("user", JSON.stringify(matchedUser));
    dispatch(loaduser(matchedUser));
  } catch (error) {
    console.log(error);
  }
};

export const asyncregisterusers = (user) => async () => {
  try {
    await axios.post("/users", user);
  } catch (error) {
    console.log(error);
  }
};
