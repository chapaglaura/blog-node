import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Post from "./components/Post";
import Navbar from "./components/Navbar"

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Navbar /> 
      <Route exact path="/" component={App} />
      <Route path="/posts/:id" component={Post} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
