import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ColorPickerForm from "./ColorPickerForm";
import DrawerHeader from "./DrawerHeader";

import { withStyles } from "@material-ui/styles";
import DrawerStyles from "../styles/DrawerStyles";

const MAX_COLORS = 20;

const DrawerContent = ({
  open,
  drawerWidth,
  handleDrawerClose,
  clearPalette,
  currentColor,
  updateCurrentColor,
  addColor,
  colorName,
  setColorName,
  colors,
  addRandomColor,
  classes,
}) => {
  const paletteFull = colors.length >= MAX_COLORS;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <div className={classes.container}>
        <Typography variant="h4" color="#e39a9d" fontWeight="bold">
          Design Your Palette
        </Typography>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            size="small"
            style={{ backgroundColor: "#e39a9d" }}
            onClick={clearPalette}
            className={classes.button}
          >
            Clear Palette
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor:
                colors.length < MAX_COLORS ? "#00cec9" : "#dbdbdb",
            }}
            disabled={paletteFull}
            onClick={addRandomColor}
            className={classes.button}
          >
            {paletteFull ? "Palette Full" : "Random Color"}
          </Button>
        </div>
        <ColorPickerForm
          colors={colors}
          addColor={addColor}
          colorName={colorName}
          setColorName={setColorName}
          currentColor={currentColor}
          updateCurrentColor={updateCurrentColor}
          paletteFull={paletteFull}
        />
      </div>
    </Drawer>
  );
};

export default withStyles(DrawerStyles)(DrawerContent);
