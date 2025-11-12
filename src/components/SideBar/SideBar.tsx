import AccountToggle from "./AccountToggle";
import Search from "./Search";

function SideBar() {
  return (
    <div>
      <div>
        {/* main sidebar content */}
        <div className="sticky top-4 h-[calc(100vh-32px-48px)] overflow-y-scroll">
          <AccountToggle />
          <Search />
        </div>
      </div>
      {/* plan toggle */}
    </div>
  );
}

export default SideBar;
