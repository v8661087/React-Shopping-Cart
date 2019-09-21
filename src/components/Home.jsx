import React, { Component } from "react";
import Products from "./Products";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    document.title = "Pokemon";
    if(localStorage.getItem('cart')){
      const cart = JSON.parse(localStorage.getItem('cart'));
      this.props.data.cart = cart
      this.setState({ cart });
    }else{
      localStorage.setItem('cart',JSON.stringify(this.props.data.cart))
    }
  }
  componentDidUpdate(){
    const cart = [...this.props.data.cart]
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  state = {
    showAddToCart: false
  };

  handleIncrement = product => {
    const cart = [...this.props.data.cart];
    const products = [...this.props.data.products];
    product.quantity++;
    this.setState({ cart: cart, products: products });
  };

  handleDecrement = product => {
    const cart = [...this.props.data.cart];
    const products = [...this.props.data.products];
    if (product.quantity > 1) {
      product.quantity--;
      this.setState({ cart: cart, products: products });
    }
  };

  handleDelete = product => {
    const cart = this.props.data.cart;
    const index = cart.indexOf(product);
    if (index !== -1) {
      cart.splice(index, 1);
      this.setState({ cart: cart });
    }
  };

  handleAdd = product => {
    const cart = this.props.data.cart;
    if (product.quantity === "") {
      product.quantity = 1;
    }
    if (cart.some(item => item.id === product.id)) {
      const index = cart.findIndex(item => item.id === product.id);
      cart[index].quantity += Number(product.quantity);
      this.setState({
        cart: cart
      });
    } else {
      cart[cart.length] = JSON.parse(JSON.stringify(product));
    }
    this.setState({
      cart: cart,
      showAddToCart: true
    });
    setTimeout(
      () =>
        this.setState({
          cart: cart,
          showAddToCart: false
        }),
      1500
    );
  };
  render() {
    return (
      <React.Fragment>
        <div className="fixed"></div>
        <Header
          cart={this.props.data.cart}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          handleSearch={this.handleSearch}
        />
        <Products
          products={this.props.data.products}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onAdd={this.handleAdd}
        />
        <Footer />
        {this.state.showAddToCart ? (
          <div className="product-added">
            <div className="product-added-checkmark">
            </div>
            <div>商品已加入購物車</div>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  data: state
});

const HomePage = connect(mapStateToProps)(Home);

export default HomePage;
