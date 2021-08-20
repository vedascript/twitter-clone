import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/HomePage/Home";
import { Login } from "./Pages/Login/Login";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/homepage">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
