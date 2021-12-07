import { useParams } from "react-router-dom";
import {
  findPalette,
  findColor,
  generateSingleColorPalette,
} from "../utils/colorHelper";
import SingleColorPalette from "../components/SingleColorPalette";
import NotFoundScreen from "./NotFoundScreen";

const SingleColorPaletteScreen = ({ palettes }) => {
  let params = useParams();
  console.log(params.id, palettes);
  const selectedPalette = findPalette(palettes, params.id);
  if (selectedPalette !== undefined) {
    const selectedColor = findColor(selectedPalette, params.colorId);
    console.log(selectedPalette, params.colorId);
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
