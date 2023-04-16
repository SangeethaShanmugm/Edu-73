import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";

const url = "http://localhost:4000/api/auth/userInfo";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      userData: "",
    };
  }
  handleLogout = () => {
    sessionStorage.setItem("loginStatus", "loggedIn");
    sessionStorage.setItem("userInfo", "");
    sessionStorage.removeItem("ltk");
    this.setState({ userData: "" });
    this.props.history.push("/");
  };

  conditionalHeader = () => {
    if (this.state.userData.name) {
      let data = this.state.userData;
      sessionStorage.setItem("loginStatus", "loggedIn");
      sessionStorage.setItem("userInfo", JSON.stringify(data));
      return (
        <>
          <Link className="btn btn-success" to="/">
            <span className="glyphicon glyphicon-user"></span>HI {data.name}
          </Link>

          <button className="btn btn-danger" onClick={this.handleLogout}>
            <span className="glyphicon glyphicon-log-out"></span>LogOut
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link className="btn btn-success" to="/login">
            <span className="glyphicon glyphicon-log-in"></span>LogIn
          </Link>

          <Link className="btn btn-danger" to="/register">
            <span className="glyphicon glyphicon-user"></span>Signup
          </Link>
        </>
      );
    }
  };
  render() {
    return (
      <header>
        <div id="brand">Zomato App</div>
        <Link className="btn btn-info" to="/">
          Home
        </Link>
        <div id="social">{this.conditionalHeader()}</div>
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

export default withRouter(Header);
