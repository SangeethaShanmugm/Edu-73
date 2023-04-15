import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const url = "http://localhost:5000/api/auth/userInfo";
export default class Header extends Component {
  render() {
    return (
      <header>
        <div id="brand">Zomato App</div>
        <Link className="btn btn-info" to="/">
          Home
        </Link>
        <div id="social">
          <Link className="btn btn-success" to="/login">
            <span className="glyphicon glyphicon-log-in"></span>LogIn
          </Link>

          <Link className="btn btn-danger" to="/register">
            <span className="glyphicon glyphicon-user"></span>Signup
          </Link>
        </div>
      </header>
    );
  }
  componentDidMount() {
    fetch(url, {
      method: "GET",
      headers: {
        "x-access-token": sessionStorage.getItem("ltk"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userData: data,
        });
      });
  }
}
