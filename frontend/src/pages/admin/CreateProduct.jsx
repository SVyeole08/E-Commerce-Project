import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { asynccreateproducts } from "../../store/actions/ProductActions";
import { useDispatch } from "react-redux";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");

  const CreateProductHandler = (product) => {
    product.id = nanoid();
    dispatch(asynccreateproducts(product));
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchedImage = watch("image");

  useEffect(() => {
    if (watchedImage && watchedImage.length > 5) {
      setPreview(watchedImage);
    } else {
      setPreview("");
    }
  }, [watchedImage]);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Create New Product</h1>
          <p className="text-muted">Add product details and preview before publishing to the store.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-glass rounded-2xl p-6">
            <form onSubmit={handleSubmit(CreateProductHandler)} className="space-y-5">
              <div>
                <label className="block text-sm text-muted mb-2">Product Title *</label>
                <input
                  {...register("title", { required: "Product title is required" })}
                  type="text"
                  placeholder="Enter the title"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-900 border ${errors.title ? 'border-red-500' : 'border-gray-700'} focus:outline-none`}
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted mb-2">Price (₹) *</label>
                  <input
                    {...register("price", { required: "Price is required", min: { value: 0, message: "Must be >= 0" } })}
                    type="number"
                    placeholder="Price"
                    className={`w-full px-4 py-3 rounded-lg bg-gray-900 border ${errors.price ? 'border-red-500' : 'border-gray-700'} focus:outline-none`}
                  />
                  {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                </div>

                <div>
                  <label className="block text-sm text-muted mb-2">Category *</label>
                  <input
                    {...register("category", { required: "Category is required" })}
                    type="text"
                    placeholder="Category"
                    className={`w-full px-4 py-3 rounded-lg bg-gray-900 border ${errors.category ? 'border-red-500' : 'border-gray-700'} focus:outline-none`}
                  />
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">Description *</label>
                <textarea
                  {...register("description", { required: "Description is required", minLength: { value: 10, message: "Must be at least 10 characters" } })}
                  placeholder="Enter description"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-900 border ${errors.description ? 'border-red-500' : 'border-gray-700'} focus:outline-none resize-none`}
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">Product Image URL *</label>
                <input
                  {...register("image", { required: "Image URL is required" })}
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-900 border ${errors.image ? 'border-red-500' : 'border-gray-700'} focus:outline-none`}
                />
                {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
              </div>

              <div className="flex items-center gap-4 pt-3">
                <button type="submit" className="btn-primary px-5 py-3 rounded-lg text-black font-semibold shadow">Create Product</button>
                <button type="button" onClick={() => navigate('/Products')} className="px-4 py-3 rounded-lg border border-white/10 text-sm text-muted">Cancel</button>
              </div>
            </form>
          </div>

          <div className="card-glass rounded-2xl p-6 flex flex-col items-center justify-center">
            <div className="w-full h-64 bg-gray-900 rounded-md overflow-hidden flex items-center justify-center">
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="text-muted text-center px-4">Image preview will appear here when you paste the image URL.</div>
              )}
            </div>

            <div className="w-full mt-4 text-sm text-muted">
              <div className="font-medium text-white mb-2">Live Preview</div>
              <div className="text-sm">Title, price and category will be visible on product cards after creation.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
