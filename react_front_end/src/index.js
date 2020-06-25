import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from "react-router-dom";

import './index.css';

import {
  Welcome,
  Login,
  Register,
  Game
} from "./Views";

function Routing() {
  return (
    <Router>
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/game" component={Game} />
    </Router>
  );
}

ReactDOM.render(  
  <React.StrictMode>
    <Routing />
  </React.StrictMode>, 
  document.getElementById("root")
);
