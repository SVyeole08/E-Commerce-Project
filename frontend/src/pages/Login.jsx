import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncloginuser } from "../store/actions/UserActions";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoginHandler = (user) => {
    user.id = nanoid();
    dispatch(asyncloginuser(user));
    navigate("/Products");
  };
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit(LoginHandler)}
      className="p-4 items-center justify-center w-fit flex flex-col "
    >
      <input
        {...register("email")}
        type="email"
        placeholder="Will@Smith.com"
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
