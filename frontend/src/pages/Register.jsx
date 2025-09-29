import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncregisterusers } from "../store/actions/UserActions";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    dispatch(asyncregisterusers(user));
    navigate("/Login");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md card-glass rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Create an account</h2>
  <p className="text-sm text-muted mb-6">Join GrabIt — it's quick and easy.</p>

        <form onSubmit={handleSubmit(RegisterHandler)} className="space-y-4">
          <div>
            <label className="text-sm text-muted block mb-1">Username</label>
            <input
              {...register("username", {
                required: "Username is required",
                minLength: { value: 3, message: "At least 3 characters" },
              })}
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>

          <div>
            <label className="text-sm text-muted block mb-1">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-sm text-muted block mb-1">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters" },
              })}
              type="password"
              placeholder="Choose a password"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

         

          <div className="flex items-center justify-between">
            <button className="btn-primary px-4 py-2 rounded-lg text-black font-semibold">Register</button>
            <Link to="/Login" className="text-sm text-muted hover:text-white">Already have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
