import React, { Component } from "react";
import "./Transfermoney.css";
class Transfermoney extends Component {
  constructor() {
    super();
    this.state = {
      addAmount: 0,
      array: [],
      addEmail: "",
      newTable: [],
    };
  }
  tranferMoney() {
    var indexs;
    var index = this.props.isSet;
    var arrays = JSON.parse(localStorage.getItem("UserTable"));
    const { addEmail, addAmount, newTable, array } = this.state;
    var values = parseInt(addAmount);
    var element = arrays[index];
    element.balance = arrays[index].balance - values;
    arrays.splice(index, 1, element);
    for (var i = 0; i < arrays.length; i++) {
      console.log(arrays[i].email);
      if (addEmail === arrays[i].email) {
        indexs = i;
        console.log(indexs);
      } else if (arrays.length - 1 === i && addEmail === arrays[i].email) {
        alert("Failure in transfer!");
      }
    }
    var amount = parseInt(addAmount);
    var amountArray = arrays[indexs];
    amountArray.balance = arrays[indexs].balance + amount;
    arrays.splice(indexs, 1, amountArray);
    var z = arrays[index].email;
    newTable.push({ from: z, to: addEmail, amountTransfer: addAmount });
    this.setState({
      addAmount: 0,
      addEmail: "",
      array: arrays,
      newTable: newTable,
    });
    localStorage.setItem("UserTable", JSON.stringify(arrays));
    localStorage.setItem("TranferMoneyTable", JSON.stringify(newTable));
  }
  componentWillMount() {
    localStorage.getItem("UserTable") &&
      this.setState({
        array: JSON.parse(localStorage.getItem("UserTable") || "{}"),
      });
  }
  componentWillMount() {
    localStorage.getItem("TranferMoneyTable") &&
      this.setState({
        newTable: JSON.parse(localStorage.getItem("TranferMoneyTable") || "{}"),
      });
  }
  render() {
    var index = this.props.isSet;
    var arrays = JSON.parse(localStorage.getItem("UserTable"));
    return (
      <div>
        <div>Your Current balance is = {arrays[index].balance}</div>
        <div>
          Send to (write email) =
          <input
            type="text"
            value={this.state.addEmail}
            onChange={(e) => this.setState({ addEmail: e.target.value })}
          />
        </div>
        <div>
          Amount to be transfer =
          <input
            type="text"
            value={this.state.addAmount}
            onChange={(e) => this.setState({ addAmount: e.target.value })}
          />
        </div>
        <div>
          <button onClick={this.tranferMoney.bind(this)}>Send</button>
        </div>
      </div>
    );
  }
}

export default Transfermoney;
