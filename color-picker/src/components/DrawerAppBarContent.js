import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import DrawerAppBar from "../components/DrawerAppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import PaletteSaveForm from "./PaletteSaveForm";

import { withStyles } from "@material-ui/styles";
import DrawerAppBarStyles from "../styles/DrawerAppBarStyles";

const DrawerAppBarContent = ({
  open,
  drawerWidth,
  handleDrawerOpen,
  colors,
  palettes,
  setPalettes,
  paletteName,
  setPaletteName,
  classes,
}) => {
  let navigate = useNavigate();

  const handleSubmit = () => {
    const newPalette = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(/ /g, "-"),
      colors: colors,
      emoji: "",
    };
    setPalettes([...palettes, newPalette]);
    navigate("/");
  };

  const handleNameChange = (e) => setPaletteName(e.target.value);

  return (
    <div>
      <DrawerAppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "#e39a9d", color: "white" }}
        drawerWidth={drawerWidth}
      >
        <div className={classes.root}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.formContainer}>
            <Link to="/" className={classes.goBackButton}>
              Go Back
            </Link>
            <PaletteSaveForm
              handleSubmit={handleSubmit}
              paletteName={paletteName}
              handleNameChange={handleNameChange}
              palettes={palettes}
            />
          </div>
        </div>
      </DrawerAppBar>
    </div>
  );
};

export default withStyles(DrawerAppBarStyles)(DrawerAppBarContent);
