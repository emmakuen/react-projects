import React from "react";

import { withStyles } from "@material-ui/styles";
import FooterStyles from "../styles/FooterStyles";

const PaletteFooter = ({ paletteName, emoji, classes }) => {
  return (
    <footer className={classes.paletteFooter}>
      <span className={classes.paletteName}>{paletteName}</span>
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

export default withStyles(FooterStyles)(PaletteFooter);
