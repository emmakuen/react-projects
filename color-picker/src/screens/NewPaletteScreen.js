import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import DraggableColorBox from "../components/DraggableColorBox";
const drawerWidth = 400;

const NewPaletteScreen = () => {
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

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
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "#e39a9d", color: "white" }}
      >
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
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
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
        >
          Add Color
        </Button>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div
          style={{
            height: "calc(100vh - 53px)",
            margin: "-24px",
          }}
        >
          {colors.map((color) => (
            <DraggableColorBox color={color} removeColor={removeColor} />
          ))}
        </div>
      </Main>
    </Box>
  );
};

export default NewPaletteScreen;
