"use client";

import { useRouter } from "next/navigation";
import { login } from "../actions";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      <div className="text-xl text-red-500">{error}</div>;
      const response = await login(formData);

      if (!!response.error) {
        console.error(response.error);
      } else {
        router.push("/");
      }
    } catch (error) {
      setError("Check your Credentials");
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center ">
      <div className="text-xl text-red-500"></div>
      <form className="login-form" onSubmit={onsubmit}>
        <div className="my-4">
          <label htmlFor="email">Email Address : </label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full bg-blue-900 py-1 rounded-lg mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
