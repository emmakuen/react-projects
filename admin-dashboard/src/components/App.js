import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tickets from "../pages/Tickets";
import { routes } from "../constants/routes";

function App() {
  const { home, tickets } = routes;
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="appContainer">
          <Sidebar />
          <Routes>
            <Route path={home.path} element={<Home />} />
            <Route path={tickets.path} element={<Tickets />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
