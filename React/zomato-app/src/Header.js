import React, { Component } from "react";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <header>
        <div id="brand">Zomato App</div>
        <div id="social">
          <button className="btn btn-success">
            Login <span className="glyphicon glyphicon-log-in"></span>
          </button>
          <button className="btn btn-danger">
            Signup <span className="glyphicon glyphicon-user"></span>
          </button>
        </div>
      </header>
    );
  }
}
