import React, { Component } from "react";
import QuickDisplay from "./QuickDisplay";
import "./QuickSearch.css";

const qurl = "http://localhost:5000/quickSearch";
export default class QuickSearch extends Component {
  constructor() {
    super();
    this.state = {
      mealType: "",
    };
  }

  render() {
    return (
      <div id="quickSearch">
        <span id="quickHeading">Quick Searches</span>
        <span id="quicksubHeading">Discover restaurants by type of meal</span>
        <QuickDisplay mealData={this.state.mealType}/>
      </div>
    );
  }

  componentDidMount() {
    fetch(qurl, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ mealType: data });
        console.log(data);
      });
  }
}
