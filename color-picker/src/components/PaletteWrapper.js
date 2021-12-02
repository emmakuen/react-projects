import { useParams } from "react-router-dom";
import { generatePalette, findPalette } from "../utils/colorHelper";
import Palette from "./Palette";

const PaletteWrapper = ({ palettes }) => {
  let params = useParams();
  return (
    <Palette palette={generatePalette(findPalette(palettes, params.id))} />
  );
};

export default PaletteWrapper;
