import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AccountSlice {
  balance: number;
  loan: number;
  loanPurpose: string;
}

interface LoanPayload {
  amount: number;
  purpose: string;
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
      const amount = action.payload;
      if (state.balance >= amount) {
        // Ensure sufficient funds
        state.balance -= amount;
      }
    },
    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action: PayloadAction<LoanPayload>) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      if (state.balance >= state.loan && state.loan > 0) {
        // Check funds and if loan exists
        state.balance -= state.loan;
        state.loan = 0;
        state.loanPurpose = "";
      }
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;
