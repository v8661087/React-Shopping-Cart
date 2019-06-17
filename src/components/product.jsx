import React, { Component } from "react";

class Product extends Component {
  state = {
    modal: false
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.product.quantity === 0 ? "warning" : "primary";
    return classes;
  }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="product">
          <img
            className="product-image"
            src={this.props.product.src}
            alt={this.props.product.name}
            onClick={this.handleModal}
          />
          <div>{this.props.product.name}</div>
          <div>
            <p>${this.props.product.price}</p>
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
            <p>
              <button
                type="button"
                onClick={() => this.props.onAdd(this.props.product)}
                className="add-to-cart-button"
              >
                加到購物車
              </button>
            </p>
          </div>
        </div>
        {this.state.modal ? (
          <div className="modal" onClick={this.handleModal}>
            <div class="modal-content">
              <span class="close" onClick={this.handleModal}>
                &times;
              </span>
              <img
                className="modal-product-image"
                src={this.props.product.src}
                alt={this.props.product.name}
              />
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
