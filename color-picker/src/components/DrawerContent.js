import React, { useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
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
  colorName,
  setColorName,
  colors,
}) => {
  const handleChange = (e) => {
    setColorName(e.target.value);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      const isNameUnique = (color) =>
        color.name.toLowerCase() !== value.toLowerCase();
      return colors.every(isNameUnique);
    });

    ValidatorForm.addValidationRule("isColorUnique", () => {
      const isColorUnique = (color) => color.color !== currentColor;
      return colors.every(isColorUnique);
    });
  }, [colors, currentColor]);

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
        <ValidatorForm onSubmit={addColor}>
          <TextValidator
            value={colorName}
            onChange={handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color must be unique",
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: currentColor }}
            type="submit"
            size="large"
          >
            Add Color
          </Button>
        </ValidatorForm>
      </div>
    </Drawer>
  );
};

export default DrawerContent;
