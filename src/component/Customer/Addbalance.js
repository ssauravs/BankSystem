import React, { Component } from "react";
import "./Addbalance.css";
class Addbalance extends Component {
  constructor() {
    super();
    this.state = {
      newValue: 0,
      array: [],
    };
  }

  addFunction() {
    var index = this.props.isSet;

    var arrays = JSON.parse(localStorage.getItem("UserTable"));
    var values =
      parseInt(this.state.newValue) + parseInt(arrays[index].balance);
    var element = arrays[index];
    element.balance = values;
    arrays.splice(index, 1, element);
    console.log(arrays);
    this.setState({
      newValue: 0,
      array: arrays,
    });
    localStorage.setItem("UserTable", JSON.stringify(arrays));
  }
  componentWillMount() {
    localStorage.getItem("UserTable") &&
      this.setState({
        array: JSON.parse(localStorage.getItem("UserTable") || "{}"),
      });
  }

  render() {
    var index = this.props.isSet;
    var arrays = JSON.parse(localStorage.getItem("UserTable"));
    return (
      <div>
        <div>Your Current balance is = {arrays[index].balance}</div>
        <div>
          For adding more money =
          <input
            type="text"
            value={this.state.newValue}
            onChange={(e) => this.setState({ newValue: e.target.value })}
          />
          <button onClick={this.addFunction.bind(this)}>Add</button>
        </div>
      </div>
    );
  }
}

export default Addbalance;
