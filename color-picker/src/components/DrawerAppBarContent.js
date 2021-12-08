import React from "react";
import { useNavigate } from "react-router-dom";
import DrawerAppBar from "../components/DrawerAppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const DrawerAppBarContent = ({
  open,
  drawerWidth,
  handleDrawerOpen,
  colors,
  palettes,
  setPalettes,
}) => {
  let navigate = useNavigate();
  const handleSubmit = () => {
    let newPaletteName = "Test Palette";
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: colors,
      emoji: "",
    };
    setPalettes([...palettes, newPalette]);
    navigate("/");
  };
  return (
    <div>
      <DrawerAppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "#e39a9d", color: "white" }}
        drawerWidth={drawerWidth}
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
          <Button
            variant="contained"
            size="small"
            style={{ backgroundColor: "#ffb69e", color: "#616565" }}
            onClick={handleSubmit}
          >
            Save Palette
          </Button>
        </Toolbar>
      </DrawerAppBar>
    </div>
  );
};

export default DrawerAppBarContent;
