import "./styles/App.css";
import Palette from "./components/Palette";
import seedPalettes from "./utils/seedPalettes";

function App() {
  return (
    <div className="App">
      <Palette {...seedPalettes[0]} />
    </div>
  );
}

export default App;
