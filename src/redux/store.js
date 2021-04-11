import { configureStore } from "@reduxjs/toolkit";
import viewSectionReducer from "./viewSection";
import themeReducer from "./theme";
import navOpenReducer from "./navOpen";

export default configureStore({
  reducer: {
    viewSection: viewSectionReducer,
    navOpen: navOpenReducer,
    theme: themeReducer,
  },
});
