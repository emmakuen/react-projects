import React from "react";
import { withStyles } from "@material-ui/styles";
import { useNavigate, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
          <h1 className={classes.title}>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                {...palette}
                key={palette.id}
                goToPalette={goToPalette}
                deletePalette={deletePalette}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default withStyles(PaletteListStyles)(PaletteListScreen);
