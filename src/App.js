import React from "react";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Customer from "./component/Customer/Customer";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Customer" component={Customer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
