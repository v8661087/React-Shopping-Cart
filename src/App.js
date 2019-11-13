import React, { Component } from "react";
import "./Pokemon.scss";
import { Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/shoppingCart";
import Home from "./components/Home";
import CartPage from "./components/CartPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={CartPage} />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
