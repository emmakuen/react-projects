import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Home from "../pages/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="appContainer">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
