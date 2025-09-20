import axios from "../../api/axiosconfig";
import { loadproduct } from "../reducers/ProductSlice";
export const asyncregisterproducts = () => async (dispatch, getState) => {
  try {
    const res = await axios.post("/products");
    dispatch(loadproduct(res.products));    
  } catch (error) {
    console.log(error);
  }
};
