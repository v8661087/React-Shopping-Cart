import React, { Component } from "react";
import "./Pokemon.scss";
import { Route } from "react-router-dom";
import HomePage from "./components/Home";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/shoppingCart";
import { CartPageAll } from "./components/CartPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CartPageAll} />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
