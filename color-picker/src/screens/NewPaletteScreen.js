import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import DrawerAppBarContent from "../components/DrawerAppBarContent";
import DrawerContent from "../components/DrawerContent";
import DrawerMainContent from "../components/DrawerMainContent";
const drawerWidth = 400;

const NewPaletteScreen = () => {
  //   const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("teal");
  const [colors, setColors] = useState(["#f44336", "#00bcd4"]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addColor = () => {
    setColors([...colors, currentColor]);
  };

  const removeColor = (colorToRemove) => {
    let filteredColors = colors.filter((color) => color !== colorToRemove);
    setColors(filteredColors);
  };

  const clearPalette = () => {
    setColors([]);
  };

  const updateCurrentColor = (newColor) => setCurrentColor(newColor.hex);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DrawerAppBarContent
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        drawerWidth={drawerWidth}
      />
      <DrawerContent
        open={open}
        handleDrawerClose={handleDrawerClose}
        drawerWidth={drawerWidth}
        clearPalette={clearPalette}
        currentColor={currentColor}
        updateCurrentColor={updateCurrentColor}
        addColor={addColor}
      />
      <DrawerMainContent
        open={open}
        drawerWidth={drawerWidth}
        removeColor={removeColor}
        colors={colors}
      />
    </Box>
  );
};

export default NewPaletteScreen;
