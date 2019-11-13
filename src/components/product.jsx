import React, { Component } from "react";

class Product extends Component {
  state = {
    modal: false,
    value: this.props.product.quantity
  };

  handleModalOpen = () => {
    document.body.style.overflow = "hidden";
    this.setState({
      modal: !this.state.modal
    });
  };
  handleModalClose = e => {
    if (
      e.target === document.getElementById("close") ||
      e.target === document.getElementById("modal")
    ) {
      document.body.style.overflow = "auto";
      this.setState({
        modal: !this.state.modal
      });
    }
  };

  handleChange = e => {
    e.target.value = e.target.value.replace(/^0|\D/g, "");
    let max = 99;
    if (e.target.value > max) {
      e.target.value = max;
    }
    if (e.target.value === "") {
      this.props.product.quantity = e.target.value;
    } else {
      this.props.product.quantity = parseInt(e.target.value);
    }
    this.setState({
      value: this.props.product.quantity
    });
  };

  render() {
    const { product,onIncrement,onDecrement,onAdd } = this.props;
    return (
      <>
        <div className="product">
          <img
            className="product__image"
            src={product.src}
            alt={product.name}
            onClick={this.handleModalOpen}
          />
          <div className="product__name">{product.name}</div>
          <div>
            <p className="product__unit-price">${product.price}</p>
            <button
              onClick={() => onDecrement(product)}
              className="product__button"
            >
              －
            </button>
            <input
              className="product__input"
              value={product.quantity}
              onChange={this.handleChange}
            />
            <button
              onClick={() => onIncrement(product)}
              className="product__button"
            >
              ＋
            </button>
            <p>
              <button
                onClick={() => onAdd(product)}
                className="product-action__button"
              >
                加入購物車
              </button>
            </p>
          </div>
        </div>
        {this.state.modal && (
          <div id="modal" className="modal" onClick={this.handleModalClose}>
            <div className="modal-content">
              <span id="close" className="modal__close">
                &times;
              </span>
              <img
                className="modal-product__image"
                src={product.src}
                alt={product.name}
              />
              <div>{product.name}</div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Product;
