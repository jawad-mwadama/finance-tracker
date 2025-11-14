import Button from "../../Ui/Button.js";
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
    </div>
  );
}

function DepositInput() {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded bg-stone-100 p-4">
      <h2 className="w-full text-2xl font-semibold">Deposit</h2>
      <label>Deposit</label>
      <input
        type="number"
        className="bg-stone-200 placeholder:text-white focus:outline-none"
      />
      <select>
        <option value="USD">US Dollar</option>
        <option value="EUR">Euro</option>
        <option value="GBP">British Pound</option>
      </select>
      <Button type="primary">Deposit</Button>
    </div>
  );
}

function WithDrawInput() {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded bg-stone-100 p-4">
      <h2 className="w-full text-2xl font-semibold">Withdaw</h2>
      <label>Withdraw</label>
      <input
        type="number"
        className="bg-stone-200 placeholder:text-stone-400 focus:outline-none"
      />
      <Button type="primary">Withdraw</Button>
    </div>
  );
}

function RequestLoan() {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded bg-stone-100 p-4">
      <h2 className="w-full text-2xl font-semibold">Request Loan</h2>
      <label>Request loan</label>
      <input
        type="number"
        placeholder="Loan amount"
        className="bg-stone-200 px-3 placeholder:text-stone-400 focus:outline-none"
      />
      <input
        placeholder="Loan purpose"
        className="bg-stone-200 placeholder:text-stone-400 focus:outline-none"
      />
      <Button type="primary">Request loan</Button>
    </div>
  );
}

function PayLoan() {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded bg-stone-100 p-4">
      <h2 className="w-full text-2xl font-semibold">Pay Loan</h2>

      <Button type="primary">Pay loan</Button>
    </div>
  );
}

export default AccountOperations;
