import { useParams } from "react-router-dom";
import SingleColorPalette from "../components/SingleColorPalette";
import NotFoundScreen from "./NotFoundScreen";
import {
  findPalette,
  findColor,
  generateSingleColorPalette,
} from "../utils/colorHelper";

const SingleColorPaletteScreen = ({ palettes }) => {
  let params = useParams();
  const selectedPalette = findPalette(palettes, params.id);
  if (selectedPalette !== undefined) {
    const selectedColor = findColor(selectedPalette, params.colorId);
    if (selectedColor !== undefined) {
      return (
        <SingleColorPalette
          palette={generateSingleColorPalette(selectedColor)}
          emoji={selectedPalette.emoji}
          parentPaletteName={selectedPalette.paletteName}
          parentPaletteId={selectedPalette.id}
        />
      );
    }
  } else {
    return <NotFoundScreen />;
  }
};

export default SingleColorPaletteScreen;
