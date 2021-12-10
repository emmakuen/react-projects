import React, { useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
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
  paletteName,
  setPaletteName,
}) => {
  useEffect(() => {
    ValidatorForm.addValidationRule("paletteNameUnique", (value) =>
      palettes.every(
        (palette) => palette.paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [palettes]);

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
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              label="Palette Name"
              value={paletteName}
              onChange={handleNameChange}
              name="paletteName"
              validators={["required", "paletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name Already Taken"]}
            />

            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#ffb69e", color: "#616565" }}
              type="submit"
            >
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </DrawerAppBar>
    </div>
  );
};

export default DrawerAppBarContent;