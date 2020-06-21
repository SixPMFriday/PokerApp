import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import Login from "./Login";
import Register from "./Register";

import './index.css';

function Navigation(props) {
  return (
    <>
      <h4>{props.menuTitle}</h4>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </>
  );
}
function Routing() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Navigation menuTitle="Navigation Menu" />
      </div>
    </Router>
  );
}

ReactDOM.render(<Routing />, document.getElementById("root"));
