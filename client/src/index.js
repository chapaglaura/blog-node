import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import EditPost from "./components/EditPost";

import { Route, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Navbar /> 
      <Route exact path="/" component={App} />
      <Route exact path="/posts/:id" component={Post} />
      <Route path="/posts/edit/:id" component={EditPost} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
