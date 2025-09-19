import React from "react";
import { useForm } from "react-hook-form";
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
        type="email"
        placeholder="Email"
        className="mb-3 outline-0 border-b text-2xl"
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-3 outline-0 border-b text-2xl"
      />
      <button className="px-3 py-2 rounded bg-[cadetblue] w-fit">LogIn</button>
    </form>
  );
};

export default Login;
