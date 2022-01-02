import React, { useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";

import { Button } from "@mui/material";

import { withStyles } from "@material-ui/styles";
import ColorPickerFormStyles from "../styles/ColorPickerFormStyles";

const ColorPickerForm = ({
  currentColor,
  updateCurrentColor,
  addColor,
  colorName,
  setColorName,
  colors,
  paletteFull,
  classes,
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
    <div className={classes.root}>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        className={classes.picker}
      />

      <ValidatorForm onSubmit={addColor} instantValidate={false}>
        <TextValidator
          className={classes.colorNameInput}
          placeholder="Color Name"
          value={colorName}
          variant="filled"
          margin="normal"
          onChange={handleChange}
          autoComplete="off"
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
          type="submit"
          size="large"
          disabled={paletteFull}
          className={classes.addButton}
        >
          {paletteFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default withStyles(ColorPickerFormStyles)(ColorPickerForm);
