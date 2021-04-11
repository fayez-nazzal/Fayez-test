import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "swipers",
  initialState: {
    pSwiper: null,
    lSwiper: null,
  },
  reducers: {
    setPSwiper: (state, action) => {
      state.pSwiper = action.payload;
    },
    setLSwiper: (state, action) => {
      state.LSwiper = action.payload;
    },
  },
});

export const { setPSwiper, setLSwiper } = themeSlice.actions;

export default themeSlice.reducer;
