import React, { Component } from "react";
import CartDrawer from "./CartDrawer";
import cartIcon from "../images/cartIcon.svg";
import { Link } from "react-router-dom";

class Header extends Component {
  state = { showCart: false };
  
  handleCart = () => {
    this.setState({
      showCart: !this.state.showCart
    });
  };

  scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  render() {
    const { cart, onDelete } = this.props;
    return (
      <div className="header">
        <div className="logo" onClick={this.scrollTop}>
          <span className="logo__image"></span>
          Pokemon
        </div>
        <div className="cart-drawer" onClick={this.handleCart}>
          <button className="cart-drawer-button">
            <img src={cartIcon} alt="cart-drawer-icon" width="30" />
            <span className="cart-drawer-badge">{cart.length}</span>
          </button>
        </div>
        {this.state.showCart && (
          <div className="cart-drawer-content">
            <div className="cart-drawer-triangle" />
            {cart.length === 0 ? (
              <div className="cart-drawer--empty">
                <div className="cart-drawer--empty__image"></div>
                <p>尚無商品</p>
              </div>
            ) : (
              <>
                {cart.map(product => (
                  <CartDrawer
                    key={product.id}
                    product={product}
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
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Header;
