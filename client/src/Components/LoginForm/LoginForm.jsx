import React, { useState } from "react";
import axios from "axios";
import "./loginForm.css";
import { Redirect } from "react-router-dom";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/user/login", { username, password })
      .then((res) => {
        <Redirect to="/homepage" />;
      })
      .catch(() => setError(true));
  };

  return (
    <div className="form-cont">
      <div className="logo-cont">
        <img src="https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter.png" />
      </div>
      <form className="form">
        <div className="form-parent">
          <div>
            <input
              className="input"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              className="input"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="button" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
          {error && <p>Something went wrong</p>}
        </div>
      </form>
    </div>
  );
};
