import React, { Component } from "react";
import "./Recipt.css";
class Recipt extends Component {
  constructor() {
    super();
    this.state = {
      displayArray: [],
    };
  }
  componentDidMount() {
    var index = this.props.isSet;
    var arrays = JSON.parse(localStorage.getItem("UserTable"));
    var array = JSON.parse(localStorage.getItem("TranferMoneyTable"));
    const { displayArray } = this.state;
    for (var i = 0; i < array.length; i++) {
      if (arrays[index].email == array[i].from) {
        displayArray.push(array[i]);
        this.setState({
          displayArray: displayArray,
        });
      }
    }
  }

  componentWillMount() {
    localStorage.getItem("TranferMoneyTable") &&
      this.setState({
        storage: JSON.parse(localStorage.getItem("TranferMoneyTable") || "{}"),
      });
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.state.displayArray.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.from}</td>
                <td>{value.to}</td>
                <td>{value.amountTransfer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Recipt;
