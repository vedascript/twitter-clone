import React from "react";
import "./loginForm.css";

export const LoginForm = () => {
  return (
    <div className="form-cont">
      <div className="logo-cont">
        <img src="https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter.png" />
      </div>
      <form className="form">
        <div className="form-parent">
          <div>
            <input className="input" placeholder="username" />
          </div>
          <div>
            <input className="input" placeholder="password" />
          </div>
          <div>
            <button className="button">LOGIN</button>
          </div>
        </div>
      </form>
    </div>
  );
};
