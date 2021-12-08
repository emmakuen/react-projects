import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PaletteScreen from "./screens/PaletteScreen";
import PaletteListScreen from "./screens/PaletteListScreen";
import SingleColorPaletteScreen from "./screens/SingleColorPaletteScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import NewPaletteScreen from "./screens/NewPaletteScreen";
import seedPalettes from "./utils/seedPalettes";
import "./styles/App.css";

function App() {
  const [palettes, setPalettes] = useState(seedPalettes);
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFoundScreen />} />
        <Route
          path="/palette/new"
          element={
            <NewPaletteScreen palettes={palettes} setPalettes={setPalettes} />
          }
        />
        <Route path="/" element={<PaletteListScreen palettes={palettes} />} />
        <Route
          path="/palette/:id"
          element={<PaletteScreen palettes={palettes} />}
        />
        <Route
          path="/palette/:id/:colorId"
          element={<SingleColorPaletteScreen palettes={palettes} />}
        />
      </Routes>
    </div>
  );
}

export default App;
