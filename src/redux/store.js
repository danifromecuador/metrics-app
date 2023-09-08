import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./items/itemsSlice";

const store = configureStore({
  reducer: {
    cities: itemsReducer,
  },
});

export default store;
