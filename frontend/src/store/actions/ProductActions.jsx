import axios from "../../api/axiosconfig";
import { loadproduct } from "../reducers/ProductSlice";
export const asyncloadproducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct(data.products));
  } catch (error) {
    console.log(error);
  }
};
export const asyncreateproducts = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncloadproducts());
  } catch (error) {
    console.log(error);
  }
};
