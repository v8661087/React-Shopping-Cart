import React, { Component } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

class Header extends Component {
  state = { showCart: false };
  handleCartOpen = () => {
    this.setState({
      showCart: true
    });
  };
  handleCartClose = () => {
    this.setState({
      showCart: false
    });
  };
  render() {
    const { cart, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div className="header">
        <div className="logo">
          <a href="#top">
            <img
              className="logo-image"
              src="./images/pokeball.png"
              alt="pokeball"
            />
            Pokemon
          </a>
        </div>
        <div
          className="cart-drawer"
          onMouseEnter={this.handleCartOpen}
          onMouseLeave={this.handleCartClose}
        >
          <Link to="/checkout">
            <button className="cart-drawer-button">
              <img
                src="https://image.flaticon.com/icons/svg/2/2772.svg"
                alt="cart-drawer-icon"
                width="30"
              />

              <span className="cart-drawer-badge">{cart.length}</span>
            </button>
          </Link>
        </div>
        {this.state.showCart ? (
          <div
            className="cart-drawer-content"
            onMouseEnter={this.handleCartOpen}
            onMouseLeave={this.handleCartClose}
          >
            <div className="cart-drawer-triangle" />
            {cart.length === 0 ? (
              <div>
                <div className="cart-drawer--empty">
                  <img
                    src="./images/smile.png"
                    alt="smile"
                    className="cart-drawer-empty-image"
                  />
                  <p>尚無商品</p>
                </div>
              </div>
            ) : (
              <React.Fragment>
                {cart.map(product => (
                  <Cart
                    key={product.id}
                    product={product}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
                  />
                ))}

                <div>
                  <Link to="/checkout">
                    <button className="cart-page-link__button">
                      查看我的購物車
                    </button>
                  </Link>
                </div>
              </React.Fragment>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Header;
