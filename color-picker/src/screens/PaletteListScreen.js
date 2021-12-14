import React from "react";
import { withStyles } from "@material-ui/styles";
import { useNavigate, Link } from "react-router-dom";
import MiniPalette from "../components/MiniPalette";
import PaletteListStyles from "../styles/PaletteListStyles";

const PaletteListScreen = ({ palettes, setPalettes, classes }) => {
  let navigate = useNavigate();
  const goToPalette = (id) => {
    navigate(`/palette/${id}`);
  };

  const deletePalette = (e, id) => {
    e.stopPropagation();
    const updatedPalettes = palettes.filter((palette) => palette.id !== id);
    setPalettes(updatedPalettes);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette
              {...palette}
              key={palette.id}
              goToPalette={goToPalette}
              deletePalette={deletePalette}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(PaletteListStyles)(PaletteListScreen);
