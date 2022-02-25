import React, { Component } from "react";
import { Link } from "react-router-dom";
import Addbalance from "./Addbalance";
import Transfermoney from "./Transfermoney";
import "./Customer.css";
import Recipt from "./Recipt";

class Customer extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      toggles: false,
      array: [],
      toggleTransver: false,
    };
  }
  componentDidMount() {
    localStorage.setItem("UserTable", JSON.stringify(this.state.array));
  }

  componentWillMount() {
    localStorage.getItem("UserTable") &&
      this.setState({
        array: JSON.parse(localStorage.getItem("UserTable") || "{}"),
      });
  }
  toggleAdd() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }
  toggleTranfer() {
    this.setState({
      toggles: !this.state.toggles,
    });
  }
  toggleTransver() {
    this.setState({
      toggleTransver: !this.state.toggleTransver,
    });
  }
  render() {
    var index = this.props.location.state.customerId;//take the index of working array
    const { array } = this.state;
    return (
      <div className="Center">
        <div>Your user id is = {array[index].userId}</div>
        <div>Your accountNo is = {array[index].accountNo}</div>
        <button onClick={this.toggleAdd.bind(this)} className="buttons">
          Add balance
        </button>
        <button onClick={this.toggleTranfer.bind(this)} className="buttons">
          Transfer money.
        </button>
        <button onClick={this.toggleTransver.bind(this)} className="buttons">
          Display Recipt.
        </button>
        <Link to="/">
          <button className="buttons">Loggout account</button>
        </Link>

        {this.state.toggle ? (
          <Addbalance isSet={index} /> //index1
        ) : null}
        {this.state.toggles ? <Transfermoney isSet={index} /> : null}

        {this.state.toggleTransver ? <Recipt isSet={index} /> : null}
      </div>
    );
  }
}

export default Customer;
