import { useParams } from "react-router-dom";
import Palette from "../components/Palette";
import NotFoundScreen from "./NotFoundScreen";
import { generatePalette, findPalette } from "../utils/colorHelper";

const PaletteScreen = ({ palettes }) => {
  let params = useParams();
  const selectedPalette = findPalette(palettes, params.id);
  if (selectedPalette !== undefined) {
    return <Palette palette={generatePalette(selectedPalette)} />;
  }
  return <NotFoundScreen />;
};

export default PaletteScreen;
