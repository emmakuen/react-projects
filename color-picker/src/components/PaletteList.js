import React from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import paletteListStyle from "../styles/paletteListStyle";

const PaletteList = ({ palettes, classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <Link to={`/palette/${palette.id}`}>
              <MiniPalette {...palette} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(paletteListStyle)(PaletteList);
