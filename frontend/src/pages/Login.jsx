import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncloginuser } from "../store/actions/UserActions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const LoginHandler = (user) => {
    user.id = nanoid();
    dispatch(asyncloginuser(user));
    navigate("/");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md card-glass rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Welcome back</h2>
  <p className="text-sm text-muted mb-6">Sign in to continue to GrabIt</p>

        <form onSubmit={handleSubmit(LoginHandler)} className="space-y-4">
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
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button className="btn-primary px-4 py-2 rounded-lg text-black font-semibold">Log In</button>
            <Link to="/Register" className="text-sm text-muted hover:text-white">Create account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
