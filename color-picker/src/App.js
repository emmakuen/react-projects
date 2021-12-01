import "./styles/App.css";
import Palette from "./components/Palette";
import seedPalettes from "./utils/seedPalettes";
import { generatePalette } from "./utils/colorHelper";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedPalettes[0])} />
    </div>
  );
}

export default App;
