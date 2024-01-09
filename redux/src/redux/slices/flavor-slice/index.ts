import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FlavorState } from "../flavorSlice.type";

const initialState: FlavorState = {
  value: "",
};

export const flavorSlice = createSlice({
  name: "flavor",
  initialState,
  reducers: {
    setFlavor: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setFlavor } = flavorSlice.actions;

export default flavorSlice.reducer;
