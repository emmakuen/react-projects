import React from "react";
import Drawer from "@mui/material/Drawer";
import DrawerHeader from "../components/DrawerHeader";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ColorPickerForm from "../components/ColorPickerForm";

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
        <Typography variant="h4">Design Your Palette</Typography>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            size="small"
            style={{ backgroundColor: "#e39a9d" }}
            onClick={clearPalette}
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
