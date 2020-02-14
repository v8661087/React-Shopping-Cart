import React, { Component } from "react";

class Cart extends Component {
  state = {
    alert: false,
    value: this.props.product.quantity
  };

  handleAlert = () => {
    this.setState({
      alert: !this.state.alert
    });
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  handleChange = e => {
    e.target.value = e.target.value.replace(/^0|\D/g, "");
    let max = 99;
    if (e.target.value > max) {
      e.target.value = max;
    }
    this.setState({
      value: e.target.value
    });
  };

  handleBlur = e => {
    if (e.target.value === "") {
      this.setState({ value: this.props.product.quantity });
    } else {
      this.props.product.quantity = parseInt(e.target.value);
    }
    this.props.onChange();
  };

  handleIncrement = product => {
    product.quantity++;
    this.setState({
      value: product.quantity
    });
    this.props.onChange();
  };

  handleDecrement = product => {
    if (product.quantity > 1) {
      product.quantity--;
      this.setState({ value: product.quantity });
    } else if (product.quantity === 1) {
      this.handleAlert();
    }
    this.props.onChange();
  };

  render() {
    const { product, onDelete } = this.props;
    return (
      <>
        <div className="cart-page-item">
          <div className="cart-page-product-header__product">
            <div>
              <img
                className="cart-page-product-header__product-image"
                src={product.src}
                alt={product.name}
              />
            </div>
            <div> {product.name}</div>
          </div>
          <div className="cart-page-product-header__unit-price">
            ${product.price}
          </div>
          <div className="cart-page-product-header__quantity">
            <button
              onClick={() => this.handleDecrement(product)}
              className="product__button"
            >
              －
            </button>
            <input
              className="product__input"
              value={this.state.value}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <button
              onClick={() => this.handleIncrement(product)}
              className="product__button"
            >
              ＋
            </button>
          </div>
          <div className="cart-page-product-header__total-price total-price">
            ${product.quantity * product.price}
          </div>
          <div className="cart-page-product-header__action">
            <button
              onClick={this.handleAlert}
              className="cart-page-product-header__action-button"
            >
              刪除
            </button>
          </div>
        </div>
        {this.state.alert && (
          <div className="popup">
            <div className="popup-content">
              <div className="popup-content__title">
                你確定要移除這個商品嗎？
              </div>
              <div className="popup-content__message">{product.name}</div>
              <div className="popup-content__action">
                <button
                  className="popup-content__action-confirm"
                  onClick={() => onDelete(product)}
                >
                  確定
                </button>
                <button
                  className="popup-content__action-cancle"
                  onClick={this.handleAlert}
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Cart;
