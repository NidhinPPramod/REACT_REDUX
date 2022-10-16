import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Nidhin", age: 10, email: "nikk@gmail.com" }));
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
