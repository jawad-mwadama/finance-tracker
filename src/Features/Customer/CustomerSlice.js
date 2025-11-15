import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

const customerSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    UpdateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { UpdateName } = customerSlice.actions;

export default customerSlice.reducer;
