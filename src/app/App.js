import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/users/:userId?" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
      ;
    </div>
  );
}

export default App;
