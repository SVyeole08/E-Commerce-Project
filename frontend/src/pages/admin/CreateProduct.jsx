import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { asyncreateproducts } from "../../store/actions/ProductActions";
import { useDispatch } from "react-redux";
const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CreateProductHandler = (product) => {
    product.id = nanoid();
    console.log(product);
    dispatch(asyncreateproducts(product));
    navigate("/Products");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Create New Product
          </h1>
          <p className="text-gray-600">
            Fill in the details to add a new product to your store
          </p>
        </div>

        <div className="bg-black rounded-2xl shadow-xl p-8">
          <form
            onSubmit={handleSubmit(CreateProductHandler)}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Product Title *
              </label>
              <input
                {...register("title", {
                  required: "Product title is required",
                })}
                type="text"
                placeholder="Enter the Title"
                className={`w-full px-4 py-3 border-2 rounded-lg text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Price (₹) *
                </label>
                <input
                  {...register("price", {
                    required: "Price is required",
                    min: { value: 0, message: "Price must be greater than 0" },
                  })}
                  type="number"
                  placeholder="Price"
                  className={`w-full px-4 py-3 border-2 rounded-lg text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 ${
                    errors.price ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Category *
                </label>
                <input
                  {...register("category", {
                    required: "Category is required",
                  })}
                  type="text"
                  placeholder="Category"
                  className={`w-full px-4 py-3 border-2 rounded-lg text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 ${
                    errors.category ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Description *
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters long",
                  },
                })}
                placeholder="Enter Description here."
                rows={4}
                className={`w-full px-4 py-3 border-2 rounded-lg text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 resize-none ${
                  errors.description ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Product Image URL *
              </label>
              <input
                {...register("image", {
                  required: "Image URL is required",
                  pattern: {
                    message: "Please enter a valid image URL",
                  },
                })}
                type="url"
                placeholder="Image URL"
                className={`w-full px-4 py-3 border-2 rounded-lg text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 ${
                  errors.image ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Create Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
