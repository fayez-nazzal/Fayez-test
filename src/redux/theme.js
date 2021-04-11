import { createSlice } from "@reduxjs/toolkit";

export const navOpenSlice = createSlice({
  name: "navOpen",
  initialState: {
    menuOpen: false,
    currentColor: "custom_blue",
  },
  reducers: {
    setColor: (state, action) => {
      state.currentColor = action.payload;
    },
    toggle: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { setColor, toggle } = navOpenSlice.actions;

export default navOpenSlice.reducer;
