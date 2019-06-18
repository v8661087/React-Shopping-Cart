import React, { Component } from 'react';
import Cart from './Cart'

class Header extends Component {
    state = { showCart: false, }
    handleCart = () => {
        this.setState({
          showCart: !this.state.showCart
        });
      };
    render() { 
        const {cart, onIncrement,onDecrement,onDelete}=this.props
        return ( 
        
        <div className="header">
            <div className="logo"><a href="#top"><img className="logo-image" src="pokeball.png" alt="pokeball"/>Pokemon</a></div>
            <div className="shopping-cart">
              <button
                onClick={this.handleCart}
                className="shopping-cart-button"
              ><img src="https://image.flaticon.com/icons/svg/2/2772.svg" alt="shopping-cart-icon" width="30"></img>
                
                <span className="shopping-cart-badge">
                  {cart.length}
                </span>
              </button>
            </div>
            {this.state.showCart ? (
              <div className="cart">
              <div className="triangle"></div>
                {cart.length === 0 ? (
                  <div>
                    <div className="product-none"><p>目前沒有商品</p></div>
                    <button
                      type="button"
                      className={cart.length > 0 ? " " : "disabled"}
                      disabled={cart.length === 0}
                    >
                      結帳
                    </button>
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
                    {}
                    <b>
                      總購買金額$
                      {cart.reduce(
                        (total, item) => (total += item.quantity * item.price),
                        0
                      )}
                    </b>
                    <div>
                      <button className="check-out">結帳</button>
                    </div>
                  </React.Fragment>
                )}
              </div>
            ) : (
              ""
            )}</div> );
    }
}
 
export default Header