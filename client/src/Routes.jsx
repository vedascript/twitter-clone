import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
