import { useParams } from "react-router-dom";
import { generatePalette, findPalette } from "../utils/colorHelper";
import seedPalettes from "../utils/seedPalettes";
import Palette from "./Palette";

const PaletteWrapper = () => {
  let params = useParams();
  return (
    <Palette palette={generatePalette(findPalette(seedPalettes, params.id))} />
  );
};

export default PaletteWrapper;
