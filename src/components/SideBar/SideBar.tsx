import AccountToggle from "./AccountToggle";
import Plan from "./Plan";
import RouteSelect from "./RouteSelect";
import Search from "./Search";

function SideBar() {
  return (
    <div>
      <div>
        {/* main sidebar content */}
        <div className="sticky top-4 h-[calc(100vh-32px-48px)] overflow-y-scroll">
          <AccountToggle />
          <Search />
          <RouteSelect />
        </div>
      </div>
      {/* plan toggle */}
      <Plan />
    </div>
  );
}

export default SideBar;
