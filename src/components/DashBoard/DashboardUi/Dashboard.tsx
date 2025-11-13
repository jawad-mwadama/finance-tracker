import Grid from "./Grid";
import TopNav from "./TopNav";

function Dashboard() {
  return (
    <div className="h-[95vh] rounded-lg bg-white pb-4 shadow">
      <TopNav />
      <Grid />
    </div>
  );
}

export default Dashboard;
