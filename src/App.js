import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="app">
      <Navbar />
      <main className="main" key={pathname}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
