import { FiCalendar } from "react-icons/fi";

function TopNav() {
  return (
    <div className="mt-2 mb-4 border-b border-stone-200 px-4 pb-4">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="block text-sm font-bold">Good morning, Jawad!</span>
          <span className="block text-xs text-stone-500">
            Thursday Nov 14th 2025
          </span>
        </div>
        <button className="flex items-center gap-2 rounded bg-stone-100 px-3 py-1.5 text-sm transition-colors hover:bg-violet-100 hover:text-violet-700">
          <FiCalendar />
          <span>Prev 3 Months</span>
        </button>
      </div>
    </div>
  );
}

export default TopNav;
