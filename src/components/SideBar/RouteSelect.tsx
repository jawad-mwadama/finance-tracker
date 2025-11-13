import { FiHome } from "react-icons/fi";

function RouteSelect() {
  return (
    <div className="space-y-1">
      <div className="flex w-full items-center justify-start gap-2 rounded bg-white px-2 py-1.5 text-sm text-stone-950 shadow transition-[box-shadow,background-color,color]">
        <FiHome /> DashBoard
      </div>
    </div>
  );
}

export default RouteSelect;
