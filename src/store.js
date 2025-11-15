/*import { createStore } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action,
      };
    case "account/requestLoan":
      if (state > 0) return state;
      //   later
      return {
        ...state,
        loan: action.payload,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({ type: "account/deposit", payload: 500 });

*/

import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./Features/Customer/CustomerSlice";

export const store = configureStore({
  reducer: { customer: customerSlice },
});
