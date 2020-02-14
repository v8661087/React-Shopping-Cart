import React, { Component } from "react";
import Products from "./Products";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    showAddToCart: false
  };
  componentDidMount() {
    console.log("20200214 16:33")
    document.title = "Pokemon";
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      this.props.data.cart = cart;
      this.setState({ cart });
    } else {
      localStorage.setItem("cart", JSON.stringify(this.props.data.cart));
    }
  }
  componentDidUpdate() {
    const cart = [...this.props.data.cart];
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  handleIncrement = product => {
    const products = this.props.data.products
    product.quantity++;
    this.setState({products});
  };

  handleDecrement = product => {
    const products = this.props.data.products;
    if (product.quantity > 1) {
      product.quantity--;
      this.setState({products: products });
    }
  };

  handleDelete = product => {
    const cart = this.props.data.cart;
    const index = cart.indexOf(product);
    if (index !== -1) {
      cart.splice(index, 1);
      this.setState({ cart });
    }
  };

  handleAdd = product => {
    const cart = this.props.data.cart;
    if (product.quantity === "") {
      product.quantity = 1;
    }
    if (cart.some(item => item.id === product.id)) {
      const index = cart.findIndex(item => item.id === product.id);
      cart[index].quantity += product.quantity;
    } else {
      cart.push({...product})
    }
    this.setState({
      cart,
      showAddToCart: true
    });
    setTimeout(
      () =>
        this.setState({
          showAddToCart: false
        }),
      1500
    );
  };
  render() {
    const { cart, products } = this.props.data;
    return (
      <>
        <div className="fixed"></div>
        <Header
          cart={cart}
          onDelete={this.handleDelete}
        />
        <Products
          products={products}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onAdd={this.handleAdd}
        />
        <Footer />
        {this.state.showAddToCart && (
          <div className="product-added">
            <div className="product-added-checkmark"></div>
            <div>商品已加入購物車</div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps)(Home);
