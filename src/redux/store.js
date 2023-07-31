import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./items/itemsSlice";

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;