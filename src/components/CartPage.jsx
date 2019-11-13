import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Cart from "./Cart";

class CartPage extends Component {
  componentDidMount() {
    document.title = "Pokemon | 購物車";
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      this.props.data.cart = cart;
      this.setState({ cart });
    } else {
      localStorage.setItem("cart", JSON.stringify(this.props.data.cart));
    }
  }

  componentDidUpdate() {
    const cart = this.props.data.cart;
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  handleDelete = product => {
    const cart = this.props.data.cart;
    const index = cart.indexOf(product);
    cart.splice(index, 1);
    this.setState({ cart });
    document.body.style.overflow = "auto";
  };

  handleChange = () => {
    const cart = this.props.data.cart;
    this.setState({ cart });
  };

  render() {
    const items = this.props.data.cart.reduce(
      (total, item) => (total += +item.quantity),
      0
    );
    const totalPrice = this.props.data.cart.reduce(
      (total, item) => (total += item.quantity * item.price),
      0
    );
    return (
      <div className="cart-page">
        <div className="cart-page-logo">
          <Link to="/">
            <div className="logo">
              <div className="logo__image"></div>
              <span>Pokemon | 購物車</span>
            </div>
          </Link>
        </div>
        {this.props.data.cart.length ? (
          <>
            <div className="cart-page-product-header">
              <div className="cart-page-product-header__product">商品</div>
              <div className="cart-page-product-header__unit-price">單價</div>
              <div className="cart-page-product-header__quantity">數量</div>
              <div className="cart-page-product-header__total-price">總計</div>
              <div className="cart-page-product-header__action">操作</div>
            </div>
            {this.props.data.cart.map(product => {
              return (
                <Cart
                  key={product.id}
                  product={product}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                  onChange={this.handleChange}
                />
              );
            })}
            <div className="cart-page-footer">
              總購買金額(
              {items}
              個商品):
              <b className="total-price2">${totalPrice}</b>
              <button className="checkout__button">結帳</button>
            </div>
          </>
        ) : (
          <div className="cart-page--empty">
            <div className="cart-page--empty__image"></div>
            <div className="cart-page--empty__text">你的購物車還是空的</div>
            <Link to="/">
              <button className="cart-page--empty__button">繼續購物</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps)(CartPage);
