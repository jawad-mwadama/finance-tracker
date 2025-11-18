import Dashboard from "./Layout/DashBoard/Dashboard";
import SideBar from "./Layout/SideBar/SideBar";

function App() {
  return (
    <main className="grid min-h-screen grid-cols-[200px_1fr] gap-4 overscroll-y-none p-4">
      <SideBar />
      <Dashboard />
    </main>
  );
}

export default App;
