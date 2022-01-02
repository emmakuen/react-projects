import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import { withStyles } from "@material-ui/styles";
import PaletteStyles from "../styles/PaletteStyles";

const SingleColorPalette = ({
  palette,
  emoji,
  parentPaletteName,
  parentPaletteId,
  classes,
}) => {
  const [format, setFormat] = useState("hex");

  const changeFormat = (format) => {
    setFormat(format);
  };

  const colorBoxes = Object.keys(palette.colors).map((key, index) => {
    return (
      <ColorBox
        {...palette.colors[key]}
        key={palette.colors[key].hex}
        formattedColor={palette.colors[key][format]}
      />
    );
  });

  return (
    <div className={classes.palette}>
      <Navbar changeFormat={changeFormat} />
      <div className={classes.paletteColors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link
            to={`/palette/${parentPaletteId}`}
            className={classes.goBackText}
          >
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter emoji={emoji} paletteName={parentPaletteName} />
    </div>
  );
};

export default withStyles(PaletteStyles)(SingleColorPalette);
