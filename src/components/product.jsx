import React, { Component } from "react";

class Product extends Component {
  state = {
    modal: false,
    value: this.props.product.quantity
  };

  handleModalOpen = () => {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    this.setState({
      modal: !this.state.modal
    });
  };
  handleModalClose = event => {
    if (
      event.target === document.getElementById("close")
    ) {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      this.setState({
        modal: !this.state.modal
      });
    }
  };
  handleModalClose2 = event => {
    if (
      event.target !== document.getElementById("close")
    ) {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      this.setState({
        modal: !this.state.modal
      });
    }
  };

  handleChange = event => {
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

  render() {
    return (
      <React.Fragment>
        <div className="product">
          <img
            className="product__image"
            src={this.props.product.src}
            alt={this.props.product.name}
            onClick={this.handleModalOpen}
          />
          <div className="product__name">{this.props.product.name}</div>
          <div>
            <p className="product__unit-price">${this.props.product.price}</p>
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
            />
            <button
              onClick={() => this.props.onIncrement(this.props.product)}
              className="product__button"
            >
              ＋
            </button>
            <p>
              <button
                onClick={() => this.props.onAdd(this.props.product)}
                className="product-action__button"
              >
                加入購物車
              </button>
            </p>
          </div>
        </div>
        {this.state.modal ? (
          <div id="modal" className="modal" onClick={this.handleModalClose2}>
            <div className="modal-content">
              <span
                id="close"
                className="modal__close"
                onClick={this.handleModalClose}
              >
                &times;
              </span>
              <img
                className="modal-product__image"
                src={this.props.product.src}
                alt={this.props.product.name}
              />
              <div>{this.props.product.name}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default Product;
