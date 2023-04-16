import React, { Component } from "react";
import axios from "axios";
import Header from "../../Header";
import OrderDisplay from "./OrderDisplay";

const purl = "http://localhost:5000/placeorder";

export default class ViewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: "",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <OrderDisplay orderData={this.state.orders}/>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.location) {
      let query = this.props.location.search.split("&");
      if (query) {
        let data = {
          status: query[0].split("=")[1],
          date: query[2].split("=")[1],
          bank_name: query[3].split("=")[1],
        };
        let id = query[1].split("=")[1].split("_")[1];
        fetch(`${purl}/${id}`, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }
    }
    axios.get(`${purl}`).then((res) => {
      this.setState({ orders: res.data });
    });
  }
}
