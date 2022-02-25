import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storageObject: [],
      name: "",
      userType: "",
      email: "",
      password: "1000000",
      userId: "0",
      accountNo: "10000",
      balance: 0,
      isState: false,
    };
    this.randomFunction = this.randomFunction.bind(this);
  }
  randomFunction() {
    const min = 1;
    const max = 100;
    var d = new Date();
    var n = d.getSeconds();
    const rand = min + n * max + 1;
    this.setState({
      password: this.state.password + rand,
      userId: this.state.userId + rand,
      accountNo: this.state.accountNo + rand,
    });
  }
  validation() {
    let pointer = -1;
    const { name, email } = this.state;
    if (name === "" || email === "") {  
      pointer = 1;
    }
    if (name.length < 3 && /[A-Za-z]/.test(name)) {
      pointer = 2;
    }
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(email)) {
      pointer = 3;
    }
    if (pointer > 0) {
      return pointer;
    } else {
      return pointer;
    }
  }
  SubmitFunction() {
    var validation;
    validation = this.validation();

    if (validation < 0) {
      var e = document.getElementById("ut");
      var strUser = e.options[e.selectedIndex].value;
      this.randomFunction();
      let obj;
      obj = this.state.storageObject;
      obj.push({
        name: this.state.name,
        email: this.state.email,
        userType: strUser,
        password: this.state.password,
        accountNo: this.state.accountNo,
        userId: this.state.userId,
        balance: this.state.balance,
      });
      localStorage.setItem(
        "UserTable",
        JSON.stringify(this.state.storageObject)
      );
      alert("You have sucessfully signed in please move to Login page!");
    } else {
      switch (validation) {
        case 1:
          alert("Enter all the detail !!");
          break;
        case 2:
          alert(
            "Name length should be greater than 4 + contain alphabets only!! "
          );
          break;
        case 3:
          alert("Write correct format of email !");
          break;
      }
    }
  }

  componentWillMount() {
    localStorage.getItem("UserTable") &&
      this.setState({
        storageObject: JSON.parse(localStorage.getItem("UserTable") || "{}"),
      });
  }

  render() {
    return (
      <div className="alignment">
        <div>
          <h1>Create Account</h1>
        </div>
        <div>
          <div>
            <label>Enter Name :</label>
          </div>

          <div className="marginfromtop">
            <input
              type="text"
              size={40}
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
        </div>
        <div>
          <div className="marginfromtop">
            <label>Enter Email :</label>
          </div>

          <div className="marginfromtop">
            <input
              type="text"
              size={40}
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
        </div>
        <div>
          <div className="marginfromtop">
            <label>Enter userType:</label>
          </div>
          <div className="marginfromtop">

            <select name="usertype" id="ut">
              <option value="manager">manager</option>
              <option value="staff">staff</option>
              <option value="customer">customer</option>
            </select>
          </div>
        </div>
        <div className="marginfromtop">
          <button onClick={this.SubmitFunction.bind(this)} className="buttons">
            Create new account
          </button>
          <Link to="/">
            <button className="buttonss">HomePage</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Signup;
