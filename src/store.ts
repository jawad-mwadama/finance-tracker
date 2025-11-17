import { configureStore } from "@reduxjs/toolkit";
// import customerSlice from "./Features/Customer/CustomerSlice";
import accountSlice from "./Features/Accounts/AccountSlice";

export const store = configureStore({
  reducer: { account: accountSlice },
});

// customer: customerSlice,
// Types for ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
