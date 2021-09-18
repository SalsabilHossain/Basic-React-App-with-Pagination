import React from "react";
import "./Sidenav.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

const Sidenav = () => {
  return (
    <div>
      <div className="sidenav">
        <h1>React</h1>
        <Link to="./counter">Counter</Link>
        <Link to="./form">Form</Link>
        <Link to="./list">List</Link>
      </div>
    </div>
  );
};

export default Sidenav;
