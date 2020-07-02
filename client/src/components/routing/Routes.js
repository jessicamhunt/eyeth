import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/NotFound";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
