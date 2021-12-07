import React from "react";
import { withStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";
import MiniPalette from "../components/MiniPalette";
import paletteListStyles from "../styles/paletteListStyles";

const PaletteListScreen = ({ palettes, classes }) => {
  let navigate = useNavigate();
  const goToPalette = (id) => {
    navigate(`/palette/${id}`);
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette
              {...palette}
              key={palette.id}
              goToPalette={goToPalette}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(paletteListStyles)(PaletteListScreen);
