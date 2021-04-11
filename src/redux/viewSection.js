import { createSlice } from "@reduxjs/toolkit";

export const viewSectionSlice = createSlice({
  name: "viewSection",
  initialState: {
    value: "home",
  },
  reducers: {
    setSection: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSection } = viewSectionSlice.actions;

export default viewSectionSlice.reducer;
