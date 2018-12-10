import React, { Component } from "react";
import "./App.css";
import AppNavbar from "./components/layout/AppNavbar";
import DashBoard from "./components/layout/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import AddClient from "./components/clients/AddClient";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={DashBoard} />
                <Route exact path="/client/add" component={AddClient} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
