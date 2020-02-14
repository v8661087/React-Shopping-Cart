import React from "react";
import Product from "./Product";

function Products(props) {
  const { products, onAdd, onIncrement, onDecrement } = props;
  return (
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
  );
}

export default Products;
