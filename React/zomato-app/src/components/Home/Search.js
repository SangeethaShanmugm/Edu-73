import React, { Component } from "react";
import "./Search.css";

const lurl = "http://localhost:5000/locations";
const rurl = "http://localhost:5000/restaurants?stateId=";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      restaurants: "",
    };
  }
  renderCity = () => {};

  render() {
    return (
      <div id="search">
        <div id="logo">
          <span>e!</span>
        </div>
        <div id="heading">
          <p>Find the best restaurants, cafés, and bars</p>
        </div>
        <div id="dropdown">
          <select>
            <option>Please type a location</option>
            <option>Sarjapur Road, Bengaluru</option>
            <option>HSR Layout, Bengaluru</option>
          </select>
          <select id="select-style">
            <option>Select Restaurants</option>
            <option>Empire restaurants</option>
            <option>CreamStone</option>
            <option>Punjabi Rasoi</option>
          </select>
        </div>
      </div>
    );
  }

  //api calling on page load
  componentDidMount() {
    fetch(lurl, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
}
