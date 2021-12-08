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
  const [colors, setColors] = useState([]);
  const [colorName, setColorName] = useState("");

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const updateCurrentColor = (newColor) => setCurrentColor(newColor.hex);
  const clearPalette = () => setColors([]);

  const addColor = () => {
    const newColor = {
      color: currentColor,
      name: colorName,
    };
    setColors([...colors, newColor]);
    setColorName("");
  };

  const removeColor = (colorToRemove) => {
    const filteredColors = colors.filter(
      (color) => color.color !== colorToRemove
    );
    setColors(filteredColors);
  };

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
        colorName={colorName}
        setColorName={setColorName}
        colors={colors}
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
