import AccountOperations from "../../Features/Accounts/AccountOperations";
import HomeText from "./HomeText";

function DashBoardLayout() {
  return (
    <div>
      {/* <h2 className="col-span-6 p-2 font-medium">Your Account Operations</h2> */}
      <HomeText />
      <AccountOperations />
    </div>
  );
}

export default DashBoardLayout;
