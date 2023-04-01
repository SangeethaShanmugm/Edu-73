import React, { Component } from "react";

export class Header extends Component {
  constructor() {
    super();

    this.state = {
      title: "React App",
      keyword: "User text here",
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      keyword: event.target.value ? event.target.value : "User text here",
    });
    this.props.userInput(event.target.value);
  };
  render() {
    return (
      <div>
        <div className="logo">{this.state.title}</div>
        <input onChange={this.handleChange} />
        <div>{this.state.keyword}</div>
      </div>
    );
  }
}
