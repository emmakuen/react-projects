import React, { useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { withStyles } from "@material-ui/styles";
import PaletteSaveFormStyles from "../styles/PaletteSaveFormStyles";

const PaletteSaveForm = ({
  handleSubmit,
  paletteName,
  handleNameChange,
  palettes,
  dialogueStage,
  handleClickClose,
  classes,
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
      <Dialog open={dialogueStage === "name"} onClose={handleClickClose}>
        <DialogTitle className={classes.title}>
          Choose a Palette Name
        </DialogTitle>
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
            <Button onClick={handleClickClose} className={classes.cancelButton}>
              Cancel
            </Button>
            <Button type="submit" className={classes.saveButton}>
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
};

export default withStyles(PaletteSaveFormStyles)(PaletteSaveForm);
