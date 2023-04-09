import React, { Component } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./details.css";
const url = "http://localhost:5000";
export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      details: "",
      menuList: "",
      mealId: sessionStorage.getItem("mealId"),
    };
  }

  render() {
    let { details } = this.state;
    return (
      <div id="mainContent">
        <div className="ImgDiv">
          <img src={details.restaurant_thumb} alt="rest-pic" />
        </div>
        <div className="contentDiv">
          <h2>{details.restaurant_name}</h2>
          <span> 250 customers Say {details.rating_text}</span>
          <h3>
            <del>Old Price: Rs. 1000</del>
          </h3>
          <h3>New Price: Rs. {details.cost}</h3>
          <h3>Best Taste of Fresh and hot food at your Door Step and DineIn</h3>
          <div className="feature-container">
            <figure>
              <img
                className="featureIcon"
                src="https://i.ibb.co/wJvrhYg/veg.png"
                alt="pureVeg"
              />
              <figcaption>Pure Veg</figcaption>
            </figure>
            <figure>
              <img
                class="featureIcon"
                src="https://i.ibb.co/mD3jpgc/sentizied.png"
                alt="sanitized"
              />
              <figcaption>Fully Sanitized</figcaption>
            </figure>
          </div>
          <Tabs>
            <TabList>
              <Tab>About Us</Tab>
              <Tab>Contact Us</Tab>
            </TabList>
            <TabPanel>
              <p>
                {details.restaurant_name} with rating as{" "}
                {details.average_rating}
              </p>
            </TabPanel>
            <TabPanel>
              <h3>{details.address}</h3>
              <p>Contact No. {details.contact_number}</p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    let restId = this.props.location.search.split("=")[1];
    // console.log(restId);
    let response = await axios.get(`${url}/details/${restId}`, {
      method: "GET",
    });
    let menuData = await axios.get(`${url}/menu/${restId}`, { method: "GET" });
    console.log(response);
    console.log(menuData);
    this.setState({ details: response.data[0], menuList: menuData.data });
  }
}
