import { createSlice } from "@reduxjs/toolkit";

// interface CustomerSlice {
//   username: string;
// }
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

console.log("hey reduxx ");

export const { UpdateName } = customerSlice.actions;

export default customerSlice.reducer;
