import React from "react";
import Drawer from "@mui/material/Drawer";
import DrawerHeader from "../components/DrawerHeader";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { ChromePicker } from "react-color";

const DrawerContent = ({
  open,
  drawerWidth,
  handleDrawerClose,
  clearPalette,
  currentColor,
  updateCurrentColor,
  addColor,
}) => {
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
      <div>
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
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
            style={{ backgroundColor: "#00cec9" }}
          >
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: currentColor }}
          onClick={addColor}
          size="large"
        >
          Add Color
        </Button>
      </div>
    </Drawer>
  );
};

export default DrawerContent;
