import Dashboard from "./components/DashBoard/Dashboard";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <main className="grid grid-cols-[220px,1fr] gap-4 bg-stone-100 p-4 font-Inter text-stone-950">
      <SideBar />
      <Dashboard />
    </main>
  );
}

export default App;
