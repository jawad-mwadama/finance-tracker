import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AccountSlice {
  balance: number;
  loan: number;
  loanPurpose: string;
}

const initialState: AccountSlice = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action: PayloadAction<number>) {
      state.balance += action.payload;
    },
    withdraw(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
    },
    // requestLoan(state, action: PayloadAction<number>) {
    //   if (state > 0) return state;
    //   // later
    //   state,;
    // },
  },
});

export const { deposit } = accountSlice.actions;
export default accountSlice.reducer;
