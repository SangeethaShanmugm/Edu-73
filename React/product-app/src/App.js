import React, { Component } from "react";
import "./App.css";
import { Header } from "./Header";
import JSON from "./data.json";
import { ProductDisplay } from "./ProductDisplay";
import { Footer } from "./Footer";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: JSON,
      filteredData: JSON,
    };
  }
  //filter product based on keyword
  filteredData = (keyword) => {
    let output = this.state.productData.filter((data) => {
      return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
    console.log("Filtered Data", output);
    this.setState({ filteredData: output });
  };

  render() {
    return (
      <div className="App">
        <Header
          userInput={(data) => {
            this.filteredData(data);
          }}
        />
        <ProductDisplay prodData={this.state.filteredData} />
        <Footer year="2023" month="April" />
      </div>
    );
  }
}
