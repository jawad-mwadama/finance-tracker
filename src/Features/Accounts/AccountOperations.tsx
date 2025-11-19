import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store.js";

import { deposit, withdraw, requestLoan, payLoan } from "./AccountSlice.js";

import Button from "../../Ui/Button.js";
import BalanceDisplay from "../Balance/BalanceDisplay.js";

function AccountOperations() {
  return (
    <div className="m-4 gap-5 rounded px-2 py-1">
      <div className="flex gap-8 py-5">
        <DepositInput />
        <WithDrawInput />
      </div>

      <div className="flex gap-8 py-5">
        <RequestLoan />
        <PayLoan />
      </div>

      <div className="flex gap-8 py-5">
        <BalanceDisplay />
      </div>
    </div>
  );
}

function DepositInput() {
  const [depositAmount, setDepositAmount] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    const amountToDeposit = Number(depositAmount);
    if (amountToDeposit > 0) {
      dispatch(deposit(amountToDeposit));
      setDepositAmount("");
    }

    console.log("depositDispatched", amountToDeposit);
  }

  return (
    <div className="flex flex-[1_1_280px] flex-wrap items-center gap-4 overflow-hidden rounded bg-stone-100 p-4">
      <h2 className="w-full text-2xl font-semibold">Deposit</h2>
      <label>Deposit</label>
      <input
        type="number"
        className="bg-stone-200 placeholder:text-white focus:outline-none"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
      />
      {/* <select>
        <option value="USD">US Dollar</option>
        <option value="EUR">Euro</option>
        <option value="GBP">British Pound</option>
      </select> */}
      <Button type="primary" onClick={handleClick}>
        Deposit
      </Button>
    </div>
  );
}

function WithDrawInput() {
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    const amountToWithdraw = Number(withdrawalAmount);
    if (amountToWithdraw > 0) {
      dispatch(withdraw(amountToWithdraw));
      setWithdrawalAmount("");
    }
  }
  return (
    <div className="flex flex-wrap items-center gap-4 rounded bg-stone-100 p-4">
      <h2 className="w-full text-2xl font-semibold">Withdaw</h2>
      <label>Withdraw</label>
      <input
        type="number"
        className="bg-stone-200 placeholder:text-stone-400 focus:outline-none"
        value={withdrawalAmount}
        onChange={(e) => setWithdrawalAmount(e.target.value)}
      />
      <Button type="primary" onClick={handleClick}>
        Withdraw
      </Button>
    </div>
  );
}

function RequestLoan() {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const dispatch = useDispatch();

  // current loan status
  const currentLoan = useSelector((state: RootState) => state.account.loan);

  function handleClick() {
    const amountToLoan = Number(loanAmount);
    // if amount is valid and there is a purpose
    if (amountToLoan > 0 && loanPurpose.length > 0) {
      // action creator with payload
      dispatch(requestLoan(amountToLoan, loanPurpose));

      // reset input
      setLoanAmount("");
      setLoanPurpose("");
    }
  }
  return (
    <div className="flex flex-wrap items-center gap-4 rounded bg-stone-100 p-4">
      <h2 className="w-full text-2xl font-semibold">Request Loan</h2>
      <label>Request loan</label>
      <input
        type="number"
        placeholder="Loan amount"
        className="bg-stone-200 px-3 placeholder:text-stone-400 focus:outline-none"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
      />
      <input
        placeholder="Loan purpose"
        className="bg-stone-200 placeholder:text-stone-400 focus:outline-none"
        value={loanPurpose}
        onChange={(e) => setLoanPurpose(e.target.value)}
      />
      <Button type="primary" onClick={handleClick} disabled={currentLoan > 0}>
        Request loan
      </Button>
    </div>
  );
}

function PayLoan() {
  const dispatch = useDispatch();

  // read loan details from redux store
  const { loan, loanPurpose } = useSelector(
    (state: RootState) => state.account,
  );

  // balance to determine if user can afford to pay
  const balance = useSelector((state: RootState) => state.account.balance);
  const canPayLoan = balance >= loan;

  function handleClick() {
    if (loan > 0 && canPayLoan) {
      dispatch(payLoan());
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-4 rounded bg-stone-100 p-4">
      <h2 className="w-full text-2xl font-semibold">Pay Loan</h2>

      {loan > 0 ? (
        <>
          <p className="w-full">
            Current Loan: **Ksh {loan.toFixed(2)}** ({loanPurpose})
          </p>
          <Button
            type="primary"
            onClick={handleClick}
            // Disable button if user cannot afford to pay the loan
            disabled={!canPayLoan}
          >
            {canPayLoan ? `Pay back ${loan.toFixed(2)}` : "Insufficient Funds"}
          </Button>
        </>
      ) : (
        <p className="w-full text-green-600">No active loan to repay.</p>
      )}
    </div>
  );
}

export default AccountOperations;

// flex flex-wrap items-center gap-4 overflow-hidden rounded bg-stone-100 p-4
