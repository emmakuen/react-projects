import { Route, Routes } from "react-router-dom";
import PaletteWrapper from "./components/PaletteWrapper";
import PaletteList from "./components/PaletteList";
import seedPalettes from "./utils/seedPalettes";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaletteList palettes={seedPalettes} />} />
        <Route
          path="/palette/:id"
          element={<PaletteWrapper palettes={seedPalettes} />}
        />
      </Routes>
    </div>
  );
}

export default App;
