import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <>
      <div className="relative mb-4 flex items-center rounded bg-stone-200 px-2 py-1.5 text-sm">
        <FiSearch className="mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
        />
        <span className="absolute top-1/2 right-1.5 flex -translate-y-1/2 items-center gap-0.5 rounded bg-stone-50 p-1 text-xs font-bold shadow">
          Ctrl + K
        </span>
      </div>
    </>
  );
}

export default Search;
