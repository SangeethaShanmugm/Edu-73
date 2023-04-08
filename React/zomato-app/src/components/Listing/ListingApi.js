import React, { Component } from "react";
import axios from "axios";
import ListingDisplay from "./ListingDisplay";
import "./Listing.css";
import CuisineFilter from "../Filter/CuisineFilter";
import CostFilter from "../Filter/CostFilter";
const url = "http://localhost:5000/restaurants?mealId=";

export default class ListingApi extends Component {
  constructor() {
    super();
    this.state = {
      restaurantList: "",
    };
  }
  setDataFilter = (data) => {
    this.setState({ restaurantList: data });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div id="mainListing">
            <div id="filter">
              <center>
                <h4>Filter</h4>
              </center>
              <CuisineFilter
                mealId={this.props.match.params.mealId}
                restPerCuisine={(data) => {
                  this.setDataFilter(data);
                }}
              />
              <CostFilter
                mealId={this.props.match.params.mealId}
                restPerCost={(data) => {
                  this.setDataFilter(data);
                }}
              />
            </div>
          </div>
          <ListingDisplay listData={this.state.restaurantList} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    let mealId = this.props.match.params.mealId;
    console.log(mealId);
    axios
      .get(`${url}${mealId}`, { method: "GET" })
      .then((res) => this.setState({ restaurantList: res.data }));
  }
}
