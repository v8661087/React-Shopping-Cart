import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div className="cart-item">
        <img
          className="product-image-cart"
          src={this.props.product.src}
          alt={this.props.product.name}
        />
        <div className="product-info">
          <p className="product-name">{this.props.product.name}</p>
          <p className="product-price">${this.props.product.price}</p>
        </div>
        <div className="product-total">
          <p>
            <button
              onClick={() => this.props.onDecrement(this.props.product)}
              className="increment-and-decrement"
            >
              －
            </button>
            <span className={this.getBadgeClasses()}>
              {this.props.product.quantity}
            </span>
            <button
              onClick={() => this.props.onIncrement(this.props.product)}
              className="increment-and-decrement"
            >
              ＋
            </button>
          </p>

          <p>總計${this.props.product.price * this.props.product.quantity}</p>
        </div>
        <a
          onClick={() => this.props.onDelete(this.props.product.id)}
          className="product-delete"
          href="#1"
        >
          x
        </a>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.product.quantity === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Cart;
