import AccountOperations from "../Features/Accounts/AccountOperations";
import HomeText from "./HomeText";

function Grid() {
  return (
    <div className="grid grid-cols-12 gap-3 px-4">
      {/* <h2 className="col-span-6 p-2 font-medium">Your Account Operations</h2> */}
      <HomeText />
      <AccountOperations />
    </div>
  );
}

export default Grid;
