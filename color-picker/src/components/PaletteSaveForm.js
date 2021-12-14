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
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    ValidatorForm.addValidationRule("paletteNameUnique", (value) =>
      palettes.every(
        (palette) => palette.paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [palettes]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save Palette</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PaletteSaveForm;
