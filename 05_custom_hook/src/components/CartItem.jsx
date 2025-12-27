import React from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>{item.price}</p>
        <div className="quantity-controls">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
            <FaMinus />
          </button>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
