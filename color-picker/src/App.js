import { Route, Routes } from "react-router-dom";
import PaletteScreen from "./screens/PaletteScreen";
import PaletteListScreen from "./screens/PaletteListScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import seedPalettes from "./utils/seedPalettes";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFoundScreen />} />
        <Route
          path="/"
          element={<PaletteListScreen palettes={seedPalettes} />}
        />
        <Route
          path="/palette/:id"
          element={<PaletteScreen palettes={seedPalettes} />}
        />
        <Route
          path="/palette/:id/:colorId"
          element={<h1>Single Color Palette</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
