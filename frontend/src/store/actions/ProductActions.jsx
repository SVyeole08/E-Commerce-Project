import axios from "../../api/axiosconfig";
import { loadproduct } from "../reducers/ProductSlice";
export const asyncloadproducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct(data));
  } catch (error) {
    console.log(error);
  }
};
export const asynccreateproducts = (product) => async (dispatch) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncloadproducts());
  } catch (error) {
    console.log(error);
  }
};
export const asyncupdateproducts = (id, product) => async (dispatch) => {
  try {
    await axios.patch(`/products/${id}`, product);
    dispatch(asyncloadproducts());
  } catch (error) {
    console.log(error);
  }
};
export const asyncdeleteproducts = (id) => async (dispatch) => {
  try {
    await axios.delete(`/products/${id}`);
    dispatch(asyncloadproducts());
  } catch (error) {
    console.log(error);
  }
};
