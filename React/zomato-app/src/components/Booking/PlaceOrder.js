import React, { Component } from "react";

const url = "http://localhost:5000/menuItem";
const purl = "http://localhost:5000/placeorder";
export default class PlaceOrder extends Component {
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  renderItem = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div className="orderItems" key={item.menu_id}>
            <img src={item.menu_image} alt={item.menu_name} />
            <h3>{item.menu_name}</h3>
            <h4>Rs. {item.menu_price}</h4>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Login First to Place Booking</h2>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3>{this.state.hotel_name}</h3>
            </div>
            <div className="panel-body">
              <form>
                <div className="row">
                  <input type="hidden" name="cost" value={this.state.cost} />
                  <input type="hidden" name="id" value={this.state.id} />
                  <input
                    type="hidden"
                    name="hotel_name"
                    value={this.state.hotel_name}
                  />
                  <div className="form-group col-md-6">
                    <label for="fname" className="control-label">
                      FirstName
                    </label>
                    <input
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="email" className="control-label">
                      Email
                    </label>
                    <input
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="phone" className="control-label">
                      Phone
                    </label>
                    <input
                      className="form-control"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="address" className="control-label">
                      Address
                    </label>
                    <input
                      className="form-control"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.renderItem(this.state.menuItem)}
                <div className="row">
                  <div className="col-md-12">
                    <h2>Total Price is Rs. {this.state.cost}</h2>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.checkout}
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let menuId = sessionStorage.getItem("menu");
    let orderId = [];
    menuId.split(",").map((item) => {
      orderId.push(parseInt(item));
      return "ok";
    });
    fetch(url, {
      //3 steps - POST, body, headers - JSON
      method: "POST",
      body: JSON.stringify(orderId),
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let totalPrice = 0;
        data.map((item) => {
          totalPrice = totalPrice + parseFloat(item.menu_price);
          return "success";
        });
        this.setState({ menuItem: data, cost: totalPrice });
      });
  }
}
