import Dashboard from "./Layout/DashBoard/Dashboard";
import SideBar from "./Layout/SideBar/SideBar";

function App() {
  return (
    <main className="grid h-dvh grid-cols-[220px_1fr] gap-4 overscroll-y-none p-4">
      <SideBar />
      <Dashboard />
    </main>
  );
}

export default App;
