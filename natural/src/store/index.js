import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
import profileSlice from "./profile-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    profile: profileSlice.reducer,
  },
});

export default store;
