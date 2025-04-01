import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (newItem.amount) state.totalQuantity += newItem.amount;
      else state.totalQuantity++;
      if (!existingItem) {
        state.totalPrice += newItem.price * newItem.amount;
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.amount,
          totalPrice: newItem.price * newItem.amount,
          name: newItem.title,
        });
      } else {
        if (newItem.amount) {
          state.totalPrice += newItem.price * newItem.amount;
          existingItem.quantity += newItem.amount;
          existingItem.totalPrice =
            existingItem.totalPrice + newItem.price * newItem.amount;
        } else {
          state.totalPrice += existingItem.price;
          existingItem.quantity++;
          existingItem.totalPrice += existingItem.price;
        }
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    emptyCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
