import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import ShoppingCart from "./ShoppingCart";

function Shopping() {
  const {
    selectedItem,
    selectItem,
    selectedItemQuantity,
    handleIncrement,
    handleDecrement,
    handleAddToCart,
  } = useGlobalContext();
  const { price } = selectedItem;

  const [isAdding, setIsAdding] = useState(false);

  const [addingText, setAddingText] = useState("Add to Cart");

  const addingButton = () => (
    <div className="flex gap-10">
      <h2>{price * selectedItemQuantity}$</h2>
      <h2>{selectedItemQuantity}</h2>
      <button className="bg-gray-300 p-1" onClick={handleIncrement}>
        +
      </button>
      <button className="bg-gray-300 p-1" onClick={handleDecrement}>
        -
      </button>
      <button
        className="bg-gray-300 p-1"
        onClick={() => handleAddToCart(selectedItem.id)}
      >
        {addingText}
      </button>
    </div>
  );

  return (
    <div>
      <button className="" onClick={() => setIsAdding(true)}>
        {isAdding ? addingButton() : "Shopping"}
      </button>
    </div>
  );
}

export default Shopping;
