import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const LoginHandler = (user) => {
    user.id = nanoid();
    console.log(user);
  };
  const { register, handleSubmit, reset } = useForm();
  return (
    <form
      onSubmit={handleSubmit(LoginHandler)}
      className="p-4 items-center justify-center w-fit flex flex-col "
    >
      <input
        {...register("username")}
        type="text"
        placeholder="Will-Smith"
        className="mb-3 outline-0 border-b text-2xl"
      />
      <input
        {...register("email")}
        type="email"
        placeholder="will@smith.com"
        className="mb-3 outline-0 border-b text-2xl"
      />
      <input
        {...register("password")}
        type="password"
        placeholder="**********"
        className="mb-3 outline-0 border-b text-2xl"
      />
      <button className="px-3 py-2 rounded bg-[cadetblue] w-fit">LogIn</button>
      <p className="mt-4">
        Don't have an account?
        <Link to="/Register" className="text-blue-400">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
