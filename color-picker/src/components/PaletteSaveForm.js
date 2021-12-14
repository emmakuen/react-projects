import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PaletteSaveForm = ({
  handleSubmit,
  paletteName,
  handleNameChange,
  palettes,
  open,
  handleClickClose,
}) => {
  useEffect(() => {
    ValidatorForm.addValidationRule("paletteNameUnique", (value) =>
      palettes.every(
        (palette) => palette.paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [palettes]);

  return (
    <div>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new palette. Make sure it's unique.
            </DialogContentText>

            <TextValidator
              label="Palette Name"
              value={paletteName}
              onChange={handleNameChange}
              name="paletteName"
              fullWidth
              margin="normal"
              validators={["required", "paletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name Already Taken"]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickClose}>Cancel</Button>
            <Button type="submit">Save Palette</Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
};

export default PaletteSaveForm;
