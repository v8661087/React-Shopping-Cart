import React, { Component } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

class Header extends Component {
  state = { showCart: false };
  handleCart = () =>{
    this.setState({
      showCart:!this.state.showCart
    })
  }
  scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  render() {
    const { cart, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div className="header">
        <div className="logo" onClick={this.scrollTop}>
          <img
            className="logo-image"
            src="./images/pokeball.png"
            alt="pokeball"
          />
          Pokemon
        </div>
        <div
          className="cart-drawer"
          onClick={this.handleCart}
        >
            <button className="cart-drawer-button">
              <img
                src="https://image.flaticon.com/icons/svg/2/2772.svg"
                alt="cart-drawer-icon"
                width="30"
              />

              <span className="cart-drawer-badge">{cart.length}</span>
            </button>
        </div>
        {this.state.showCart ? (
          <div
            className="cart-drawer-content"
          >
            <div className="cart-drawer-triangle" />
            {cart.length === 0 ? (
              <div>
                <div className="cart-drawer--empty">
                  <img
                    src="./images/smile.png"
                    alt="smile"
                    className="cart-drawer--empty__image"
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
                    <button className="cart-drawer-link__button">
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
