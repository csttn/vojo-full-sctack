import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Homepage } from "../views/Homepage";
import { Authorized } from "../views/Authorized";
import { Login } from "../views/Login";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/authorized" component={Authorized} />
      </Switch>
    </Router>
  );
}
