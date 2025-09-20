import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.productReducer.prodcuts);
  const renderproduct = products.map((product) => {
    return (
      <div key={product.id}>
        <img src={product.image} alt="" />
        <h1>{product.title}</h1>
        <h1>{product.description.slice(0, 100)}...</h1>
        <div>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  });
  return products.length > 0 ? <div>{renderproduct}</div> : "Loading...";
};

export default Products;
