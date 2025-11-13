function AccountOperations() {
  return (
    <>
      <DepositInput />
      <WithDrawInput />
      <RequestLoan />
      <PayLoan />
    </>
  );
}

function DepositInput() {
  return (
    <div className="col-span-6 border-2 border-violet-400 p-4">
      <label>Deposit</label>
      <input
        type="number"
        className="bg-white placeholder:text-stone-400 focus:outline-none"
      />
      <select>
        <option value="USD">US Dollar</option>
        <option value="EUR">Euro</option>
        <option value="GBP">British Pound</option>
      </select>
      <button>Deposit</button>
    </div>
  );
}

function WithDrawInput() {
  return (
    <div className="col-span-6 border-2 border-violet-400 p-4">
      <label>Withdraw</label>
      <input type="number" />
      <button>Withdraw</button>
    </div>
  );
}

function RequestLoan() {
  return (
    <div className="col-span-6 border-2 border-violet-400 p-4">
      <label>Request loan</label>
      <input type="number" placeholder="Loan amount" />
      <input placeholder="Loan purpose" />
      <button>Request loan</button>
    </div>
  );
}

function PayLoan() {
  return (
    <div className="col-span-6 border-2 border-violet-400 p-4">
      <span>Pay back</span>
      <button>Pay loan</button>
    </div>
  );
}

export default AccountOperations;
