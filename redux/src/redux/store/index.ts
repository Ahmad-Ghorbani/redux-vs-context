import { configureStore } from "@reduxjs/toolkit";
import flavorReducer from "../slices/flavor-slice";

const store = configureStore({
  reducer: {
    flavor: flavorReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
