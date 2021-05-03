import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Pages/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import NotFound from "./components/Pages/Error/NotFound";
import AddCP from "./components/Pages/CRUD/AddCP";
import EditCP from "./components/Pages/CRUD/EditCP";
import View from "./components/Pages/CRUD/ViewCP";
import Login from "./components/Pages/Login/Login";

function Redirect() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/CRUD/add" component={AddCP} />
          <Route exact path="/CRUD/edit/:id" component={EditCP} />
          <Route exact path="/CRUD/:id" component={View} />
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Redirect;
