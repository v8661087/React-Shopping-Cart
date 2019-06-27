import React, { Component } from "react";

class Cart2 extends Component {
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

  handleChange = event => {
    this.props.onChange(this.props.product);
    event.target.value = event.target.value.replace(/^0|\D/g, "");
    let max = 99;
    if (event.target.value > max) {
      event.target.value = max;
    }
    if (event.target.value === "") {
      this.props.product.quantity = event.target.value;
    } else {
      this.props.product.quantity = parseInt(event.target.value);
    }
    this.setState({
      value: this.props.product.quantity
    });
  };
  handleBlur = event => {
    if (event.target.value === "") {
      this.props.product.quantity = 1;
    }
    this.props.onChange(this.props.product);
  };
  render() {
    return (
      <React.Fragment>
        <div className="cart-page-item">
          <div className="cart-page-product-header__product">
            <div>
              <img
                className="cart-page-product-header__product-image"
                src={this.props.product.src}
                alt={this.props.product.name}
              />
            </div>
            <div> {this.props.product.name}</div>
          </div>
          <div className="cart-page-product-header__unit-price">
            ${this.props.product.price}
          </div>
          <div className="cart-page-product-header__quantity">
            <button
              onClick={() => this.props.onDecrement(this.props.product)}
              className="product__button"
            >
              －
            </button>
            <input
              className="product__input"
              value={this.props.product.quantity}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <button
              onClick={() => this.props.onIncrement(this.props.product)}
              className="product__button"
            >
              ＋
            </button>
          </div>
          <div className="cart-page-product-header__total-price total-price">
            ${this.props.product.price * this.props.product.quantity}
          </div>
          <div className="cart-page-product-header__action">
            <button onClick={this.handleAlert} className="product__action">
              刪除
            </button>
          </div>
        </div>
        <React.Fragment>
          {this.state.alert ? (
            <div className="popup">
              <div className="popup-content">
                <div className="popup-content__title">
                  你確定要移除這個商品嗎？
                </div>
                <div className="popup-content__message">
                  {this.props.product.name}
                </div>
                <div className="popup-content__action">
                  <button
                    className="popup-content__action-confirm"
                    onClick={() => this.props.onDelete(this.props.product)}
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
          ) : (
            ""
          )}
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default Cart2;
