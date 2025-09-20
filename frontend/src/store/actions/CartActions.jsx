import axios from "../../api/axiosconfig";
import { loadcart } from "../reducers/CartSlice";
export const asyncregistercarts = () => async (dispatch, getState) => {
  try {
    const res = await axios.post("/carts");
    dispatch(loadcart(res.carts));    
  } catch (error) {
    console.log(error);
  }
};
