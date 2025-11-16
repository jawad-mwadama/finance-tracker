import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CustomerSlice {
  username: string;
}
const initialState: CustomerSlice = {
  username: "",
};

const customerSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    UpdateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { UpdateName } = customerSlice.actions;

export default customerSlice.reducer;
