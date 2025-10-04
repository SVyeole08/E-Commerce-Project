import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.productReducer.products);

  const renderproducts =
    products && Array.isArray(products)
      ? products.map((product) => {
          return (
            <div
              onClick={() => navigate(`/Products/${product.id}`)}
              title="Click to view details"
              className="cursor-pointer hover:scale-105 transition-all-ease-in-out duration-300"
              key={product.id}
            >
              <div className="card-glass rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="w-full h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-top transform transition"
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted mt-2 line-clamp-2">
                    {product.description}
                  </p><small className="text-blue-600">More Info..</small>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-white/6 text-white">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="text-lg font-bold text-emerald-400">
                        ₹{product.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      : [];

  return products && Array.isArray(products) && products.length > 0 ? (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderproducts}
      </div>
    </div>
  ) : (
    <div className="w-full flex items-center justify-center py-20 text-muted">
      Loading...
    </div>
  );
};

export default Products;
