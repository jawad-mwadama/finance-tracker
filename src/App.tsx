import Dashboard from "./components/DashBoard/Dashboard";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <main className="h-100vh grid h-screen grid-cols-[220px_1fr] gap-4 overscroll-y-none p-4">
      <SideBar />
      <Dashboard />
    </main>
  );
}

export default App;
