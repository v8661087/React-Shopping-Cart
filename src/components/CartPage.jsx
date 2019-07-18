import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Cart2 from "./Cart2";

class CartPage extends Component {
  componentDidMount() {
    document.title = "Pokemon | 購物車";
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.props.data.cart = cart
    this.setState({ cart });
  }
  componentDidUpdate(){
    const cart = [...this.props.data.cart]
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  handleIncrement = product => {
    const cart = [...this.props.data.cart];
    const products = [...this.props.data.products];
    product.quantity++;
    this.setState({ cart: cart, products: products });
  };

  handleDecrement = product => {
    const cart = [...this.props.data.cart];
    const products = [...this.props.data.products];
    if (product.quantity !== 1) {
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
    document.body.style.overflow = "auto";
  };

  handleChange = () => {
    const cart = this.props.data.cart;
    this.setState({
      cart: cart
    });
  };

  render() {
    let cartItem = this.props.data.cart.map(product => {
      return (
        <Cart2
          key={product.id}
          product={product}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onChange={this.handleChange}
        />
      );
    });
    let total = this.props.data.cart.reduce(
      (total, item) => (total += item.quantity * item.price),
      0
    );
    return (
      <div className="cart-page">
        <div className="cart-page-logo">
          <Link to="/">
            <img
              className="logo-image"
              src="./images/pokeball.png"
              alt="pokeball"
            />
            Pokemon | 購物車
          </Link>
        </div>
        {this.props.data.cart.length ? (
          <React.Fragment>
            <div className="cart-page-product-header">
              <div className="cart-page-product-header__product">商品</div>
              <div className="cart-page-product-header__unit-price">單價</div>
              <div className="cart-page-product-header__quantity">數量</div>
              <div className="cart-page-product-header__total-price">總計</div>
              <div className="cart-page-product-header__action">操作</div>
            </div>
            {cartItem}
            <div className="cart-page-footer">
              總購買金額(
              {this.props.data.cart.reduce(
                (total, item) => (total += item.quantity),
                0
              )}
              個商品):<b className="total-price2">${total}</b>
              <button className="checkout__button">結帳</button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="cart-page--empty">
              <img
                className="cart-page--empty__image"
                src="./images/smile.png"
                alt="smile"
              />
              <div className="cart-page--empty__text">你的購物車還是空的</div>
              <Link to="/">
                <button className="cart-page--empty__button">繼續購物</button>
              </Link>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state
});

class ConnectCartPage extends Component {
  render() {
    return (
      <div>
        <CartPage data={this.props.data} />
      </div>
    );
  }
}

const CartPageAll = connect(mapStateToProps)(ConnectCartPage);

export { CartPageAll };
