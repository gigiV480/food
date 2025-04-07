import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: { items: [] },
  reducers: {
    getList(state, action) {
      state.items = action.payload;
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice;
