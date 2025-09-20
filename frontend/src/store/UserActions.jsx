import axios from "../api/axiosconfig";
import { loaduser } from "./UserSlice";
export const asyncgetusers = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/users");
    dispatch(loaduser(res.data));
  } catch (error) {
    console.log(error);
  }
};
