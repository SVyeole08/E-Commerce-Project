import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {
  const RegisterHandler = (user) => {
    console.log(user);
  };
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const password = watch("password");
  return (
    <form
      onSubmit={handleSubmit(RegisterHandler)}
      className="p-4 items-center justify-center w-fit flex flex-col "
    >
      <input
        {...register("username", { 
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Username must be at least 3 characters"
          }
        })}
        type="text"
        placeholder="Will-Smith"
        className="mb-3 outline-0 border-b text-2xl"
      />
      {errors.username && (
        <p className="text-red-500 text-sm mb-2">{errors.username.message}</p>
      )}
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        })}
        type="email"
        placeholder="will@smith.com"
        className="mb-3 outline-0 border-b text-2xl"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
      )}
      <input
        {...register("password", { 
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters"
          }
        })}
        type="password"
        placeholder="**********"
        className="mb-3 outline-0 border-b text-2xl"
      />
      {errors.password && (
        <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
      )}
      <input
        {...register("confPassword", {
          required: "Please confirm your password",
          validate: (value) => value === password || "Passwords do not match"
        })}
        type="password"
        placeholder="Confirm Password"
        className="mb-3 outline-0 border-b text-2xl"
      />
      {errors.confPassword && (
        <p className="text-red-500 text-sm mb-2">{errors.confPassword.message}</p>
      )}
      <button className="px-3 py-2 rounded bg-[cadetblue] w-fit">Register</button>
      <p className="mt-4">
        Already have an account?
        <Link to="/Login" className="text-blue-400">
          LogIn
        </Link>
      </p>
    </form>
  );
};

export default Register;
