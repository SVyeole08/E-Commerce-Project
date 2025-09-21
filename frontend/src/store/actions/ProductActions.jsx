import axios from "../../api/axiosconfig";
import { loadproduct } from "../reducers/ProductSlice";
export const asyncloadproducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/products");
    console.log("API Response:", data); // Debug log
    dispatch(loadproduct(data));
  } catch (error) {
    console.log(error);
  }
};
export const asyncreateproducts = (product) => async (dispatch) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncloadproducts());
  } catch (error) {
    console.log(error);
  }
};
