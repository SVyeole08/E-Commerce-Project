import React, { useEffect, useState } from "react";
import axios from "../api/axiosconfig";
import { useDispatch, useSelector } from "react-redux";
import { loadlazyproduct } from "@/store/reducers/ProductSlice";
const useInfiniteProducts = () => {
  const { products } = useSelector((state) => state.productReducer);
  const [hasMore, sethasMore] = useState(true);
  const dispatch = useDispatch();
  const fetchproducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=8&_start=${products.length}`
      );
      if (data.length == 0) {
        sethasMore(false);
      } else {
        sethasMore(true);
      }
      dispatch(loadlazyproduct(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchproducts();
  }, []);

  return { products, hasMore, fetchproducts };
};

export default useInfiniteProducts;
