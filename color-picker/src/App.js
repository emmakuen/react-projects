import { Route, Routes } from "react-router-dom";
import PaletteWrapper from "./components/PaletteWrapper";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>PALETTE LIST GOES HERE!</h1>} />
        <Route path="/palette/:id" element={<PaletteWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
