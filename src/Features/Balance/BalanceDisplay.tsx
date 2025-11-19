import { useSelector } from "react-redux";
import type { RootState } from "../../store";

function BalanceDisplay() {
  const balance = useSelector((state: RootState) => state.account.balance);

  const formattedBalance = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  }).format(balance);
  return (
    <div className="rflex flex-wrap items-center gap-4 rounded bg-stone-100 p-4">
      <h2 className="text-xl font-bold text-stone-700">
        Your Current Account Balance:
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-violet-500">
        {formattedBalance}
      </p>
    </div>
  );
}

export default BalanceDisplay;
