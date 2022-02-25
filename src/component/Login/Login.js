import React from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginByManager: false,
      loginByCustomer: false,
      customerId: 0,
      storage: [
        {
          name: "Saurav",
          email: "saurav@gmail.com",
          userType: "manager",
          password: "12345678",
          accountNo: "1010",
          userId: "007",
          balance: 1000,
        },
      ],
    };
  }
  componentDidMount() {
    localStorage.setItem("UserTable", JSON.stringify(this.state.storage));
  }

  componentWillMount() {
    localStorage.getItem("UserTable") &&
      this.setState({
        storage: JSON.parse(localStorage.getItem("UserTable") || "{}"),
      });
  }
  submitFunctions() {
    const { email, password, customerId } = this.state;
    var array = JSON.parse(localStorage.getItem("UserTable"));
    var flag = 0;
    for (var i = 0; i < array.length; i++) {
      if (
        array[i].email === email &&
        array[i].password === password &&
        array[i].userType === "manager"
      ) {
        alert("Success in Login by manager!");
        flag = -1;
        this.setState({
          email: "",
          password: "",
          loginByManager: true,
          customerId: i,
          flag: false,
        });
      } else if (
        array[i].email === email &&
        array[i].password === password &&
        (array[i].userType === "staff" || array[i].userType === "customer")
      ) {
        alert("Success in Login by Staff/Customer !");
        flag = -1;
        this.setState({
          email: "",
          password: "",
          loginByCustomer: true,
          customerId: i,
          flag: false,
        });
      } else if (
        array.length - 1 === i &&
        flag === 0 &&
        email !== "" &&
        password !== ""
      ) {
        alert("Failure in login!");
        this.setState({
          flag: false,
        });
      }
    }
  }

  render() {
    if (this.state.loginByManager) return <Redirect to="/Signup" />;
    else if (this.state.loginByCustomer)
      return (
        <Redirect
          to={{
            pathname: "/Customer",
            state: { customerId: this.state.customerId },
          }}
        />
      );
    else {
      return (
        <div>
          <div className="alignment">
            <div>
              <h1>Online Bank</h1>
            </div>
            <div>
              <div>
                <label>Enter Email :</label>
              </div>

              <div className="marginfromtop">
                <input
                  type="text"
                  value={this.state.email}
                  size={40}
                  name="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <div className="marginfromtop">
                <label>Enter Password:</label>
              </div>
              <div className="marginfromtop">
                <input
                  type="password"
                  value={this.state.password}
                  size={40}
                  name="password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
            </div>
            <div className="marginfromtop">
              <button
                onClick={this.submitFunctions.bind(this)}
                className="buttons"
              >
                Login
              </button>
            </div>
          </div>
          )
        </div>
      );
    }
  }
}
export default Login;
