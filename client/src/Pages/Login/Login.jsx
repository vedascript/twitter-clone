import React from "react";
import { LoginForm } from "../../Components/LoginForm/LoginForm";
import "./login.css";

export const Login = () => {
  return (
    <div className="cont">
      <div className="imgCont">
        <div className="text">
          <h1>Welcome To</h1>
          <h1>Twitter</h1>
        </div>
      </div>
      <div className="loginCont">
        <LoginForm />
      </div>
    </div>
  );
};
