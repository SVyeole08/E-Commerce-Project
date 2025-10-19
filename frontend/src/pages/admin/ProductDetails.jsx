import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  asyncdeleteproducts,
  asyncupdateproducts,
} from "../../store/actions/ProductActions";
import { asyncupdateusers } from "../../store/actions/UserActions";

const ProductDetails = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productReducer);
  const product = products?.find(
    (product) => String(product.id) === String(id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: "",
      title: "",
      price: "",
      category: "",
      description: "",
    },
  });

  useEffect(() => {
    if (product) {
      reset({
        image: product.image || "",
        title: product.title || "",
        price: product.price || "",
        category: product.category || "",
        description: product.description || "",
      });
    }
  }, [product, reset]);

  const UpdateProductHandler = (payload) => {
    dispatch(asyncupdateproducts(id, payload));
  };
  const DeleteHandler = () => {
    dispatch(asyncdeleteproducts(id));
    navigate("/");
  };

  const AddtoCartHandler = (product) => {
    if (!users) {
      navigate("/login");
      return;
    }

    const copyuser = { ...users, cart: [...users.cart] };

    const cartproducts = copyuser.cart.findIndex(
      (c) => c?.product?.id === product.id
    );

    if (cartproducts === -1) {
      copyuser.cart.push({ product, quantity: 1 });
    } else {
      copyuser.cart[cartproducts] = {
        product,
        quantity: copyuser.cart[cartproducts].quantity + 1,
      };
    }

    dispatch(asyncupdateusers(copyuser.id, copyuser));
  };

  return product ? (
    <div className="w-screen min-h-screen p-6 bg-gray-900 text-gray-100">
      <div className="max-w-6xl space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-100">Product Details</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-700">
            <div className="w-full bg-gray-900">
              <img
                className="w-full h-[380px] object-cover object-center"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold text-gray-100">
                {product.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900/30 text-blue-300 border border-blue-800">
                  {product.category}
                </span>
                <span className="text-2xl font-bold text-emerald-400">
                  ₹{product.price}
                </span>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => AddtoCartHandler(product)}
                  className="w-full md:w-auto px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {users && users?.isAdmin && (
            <div className="bg-gray-800 rounded-2xl shadow-md border border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Update Product
              </h3>
              <form
                onSubmit={handleSubmit(UpdateProductHandler)}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Product Title *
                  </label>
                  <input
                    {...register("title", { required: "Title is required" })}
                    type="text"
                    placeholder="Enter the Title"
                    className={`w-full px-4 py-3 border rounded-lg text-base transition bg-gray-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.title ? "border-red-500" : "border-gray-700"
                    }`}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm">
                      {errors.title.message}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Price (₹) *
                    </label>
                    <input
                      {...register("price", { required: "Price is required" })}
                      type="number"
                      placeholder="Price"
                      className={`w-full px-4 py-3 border rounded-lg text-base transition bg-gray-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.price ? "border-red-500" : "border-gray-700"
                      }`}
                    />
                    {errors.price && (
                      <p className="text-red-500 text-sm">
                        {errors.price.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Category *
                    </label>
                    <input
                      {...register("category", {
                        required: "Category is required",
                      })}
                      type="text"
                      placeholder="Category"
                      className={`w-full px-4 py-3 border rounded-lg text-base transition bg-gray-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.category ? "border-red-500" : "border-gray-700"
                      }`}
                    />
                    {errors.category && (
                      <p className="text-red-500 text-sm">
                        {errors.category.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Description *
                  </label>
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                    })}
                    placeholder="Enter Description here."
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg text-base transition bg-gray-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${
                      errors.description ? "border-red-500" : "border-gray-700"
                    }`}
                  ></textarea>
                  {errors.description && (
                    <p className="text-red-500 text-sm">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Product Image URL *
                  </label>
                  <input
                    {...register("image", {
                      required: "Image URL is required",
                    })}
                    type="url"
                    placeholder="Image URL"
                    className={`w-full px-4 py-3 border rounded-lg text-base transition bg-gray-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.image ? "border-red-500" : "border-gray-700"
                    }`}
                  />
                  {errors.image && (
                    <p className="text-red-500 text-sm">
                      {errors.image.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-sm"
                  >
                    Update Product
                  </button>
                  <button
                    onClick={DeleteHandler}
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-sm"
                  >
                    Delete Product
                  </button>
                  <button
                    onClick={() => {
                      navigate(-1);
                    }}
                    className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-5 rounded-lg transition shadow-sm"
                  >
                    Go to Products
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="w-screen min-h-screen flex items-center justify-center text-gray-300 bg-gray-900">
      Loading...
    </div>
  );
};

export default ProductDetails;
