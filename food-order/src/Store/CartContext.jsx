import React, { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {}
});

function cartReducer(state, action) {
  if (action.type === "add") {
    const itemIndex = state.items.findIndex((item) => item.id === action.item.id);
    const updatedItems = [...state.items];

    if (itemIndex > -1) {
      updatedItems[itemIndex] = {
        ...state.items[itemIndex],
        quantity: state.items[itemIndex].quantity + 1
      };
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "remove") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    if (itemIndex === -1) return state;

    const existingItem = state.items[itemIndex];
    const updatedItems = [...state.items];

    if (existingItem.quantity === 1) {
      updatedItems.splice(itemIndex, 1);
    } else {
      updatedItems[itemIndex] = {
        ...existingItem,
        quantity: existingItem.quantity - 1
      };
    }
    return { ...state, items: updatedItems };
  }
  return state;
}

export function CartProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "add", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "remove", id });
  }

  const value = {
    items: cart.items,
    addItem,
    removeItem
  };

  return (
    <CartContext value={value}>
      {children}
    </CartContext>
  );
}

export default CartContext;
