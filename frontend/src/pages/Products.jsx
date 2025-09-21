import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);
  console.log("Products from Redux store:", products);
  console.log("Products type:", typeof products);
  console.log("Products length:", products?.length);
  const renderproducts =
    products && Array.isArray(products)
      ? products.map((product) => {
          return (
            <div
              className="project w-[23%] mt-10 relative h-[80vh] ml-3 mr-3 mb-6 border border-gray-200 rounded-xl shadow-lg hover:scale-102 hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden"
              key={product.id}
            >
              <img
                className="w-full h-[60%] object-cover object-top"
                src={product.image}
                alt={product.title}
                loading="lazy"
                decoding="async"
                crossOrigin="anonymous"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="p-4 h-[40%] flex flex-col justify-between">
                <div>
                  <h1 className="text-xl font-bold text-gray-800 line-clamp-2">
                    {product.title}
                  </h1>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-green-600">
                    {product.price}/-
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer duration-200 shadow-md hover:scale-102 hover:shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })
      : [];
  return products && Array.isArray(products) && products.length > 0 ? (
    <div className="overflow-auto w-screen h-screen flex-wrap items-center justify-center flex">
      {renderproducts}
    </div>
  ) : (
    "Loading..."
  );
};

export default Products;
