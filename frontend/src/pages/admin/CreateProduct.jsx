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
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit(CreateProductHandler)}
      className="p-4 items-center justify-center w-fit flex flex-col "
    >
      <input
        {...register("title")}
        type="text"
        placeholder="Enter the Title"
        className="mb-3 outline-0 border-b text-2xl"
      />
      <input
        {...register("price")}
        type="number"
        placeholder="Price"
        className="mb-3 outline-0 border-b text-2xl"
      />
      <textarea
        {...register("description")}
        placeholder="Enter Description here."
        className="mb-3 outline-0 border-b text-2xl"
      ></textarea>
      <input
        {...register("category")}
        type="text"
        placeholder="Category"
        className="mb-3 outline-0 border-b text-2xl"
      />
      <input
        {...register("image")}
        type="url"
        placeholder="Image"
        className="mb-3 outline-0 border-b text-2xl"
      />
      <button className="px-3 py-2 bg-green-500 rounded">Create Recipe</button>
    </form>
  );
};

export default CreateProduct;
