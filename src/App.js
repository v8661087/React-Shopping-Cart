import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/shoppingCart";
import { CartPageAll } from "./components/CartPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CartPageAll} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
