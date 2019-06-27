import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {};
  render() {
    const { products, onAdd, onIncrement, onDecrement } = this.props;
    return (
      <React.Fragment>
        <div className="products">
          {products.map(product => (
            <Product
              key={product.id}
              product={product}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
              onAdd={onAdd}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
