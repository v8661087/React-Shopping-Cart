import React from "react";

function CartDrawer(props) {
  const { product, onDelete } = props;
  return (
    <div className="cart-item">
      <img className="cart-item-image" src={product.src} alt={product.name} />
      <div className="cart-item-name">{product.name}</div>
      <div className="cart-item-total">
        <p>
          <b className="total-price">${product.price}</b> x {product.quantity}
        </p>
        <button onClick={() => onDelete(product)} className="cart-item__action">
          刪除
        </button>
      </div>
    </div>
  );
}

export default CartDrawer;
