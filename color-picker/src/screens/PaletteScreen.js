import { useParams } from "react-router-dom";
import { generatePalette, findPalette } from "../utils/colorHelper";
import Palette from "../components/Palette";
import NotFoundScreen from "./NotFoundScreen";

const PaletteScreen = ({ palettes }) => {
  let params = useParams();
  const selectedPalette = findPalette(palettes, params.id);
  if (selectedPalette !== undefined) {
    return <Palette palette={generatePalette(selectedPalette)} />;
  }
  return <NotFoundScreen />;
};

export default PaletteScreen;
