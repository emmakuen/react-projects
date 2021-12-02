import { Route, Routes } from "react-router-dom";
import Palette from "./components/Palette";
import seedPalettes from "./utils/seedPalettes";
import { generatePalette } from "./utils/colorHelper";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>PALETTE LIST GOES HERE!</h1>} />
        <Route path="/palette/:id" element={<h1>INDIVIDUAL PALETTE!</h1>} />
      </Routes>
      {/* <Palette palette={generatePalette(seedPalettes[0])} /> */}
    </div>
  );
}

export default App;
