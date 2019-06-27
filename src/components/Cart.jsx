import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div className="cart-item">
        <img
          className="cart-item-image"
          src={this.props.product.src}
          alt={this.props.product.name}
        />
        <div className="cart-item-name">{this.props.product.name}</div>

        <div className="cart-item-total">
          <p>
            <b className="total-price">${this.props.product.price}</b> x{" "}
            {this.props.product.quantity}
          </p>
          <button
            onClick={() => this.props.onDelete(this.props.product)}
            className="cart-item__action"
          >
            刪除
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;
