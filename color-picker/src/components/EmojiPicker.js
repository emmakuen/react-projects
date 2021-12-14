import React from "react";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import { withStyles } from "@material-ui/styles";
import PaletteSaveFormStyles from "../styles/PaletteSaveFormStyles";

const EmojiPicker = ({
  dialogueStage,
  handleClickClose,
  handleClickNext,
  onEmojiSelect,
  paletteEmoji,
  classes,
}) => {
  return (
    <div>
      <Dialog open={dialogueStage === "emoji"} onClose={handleClickClose}>
        <DialogTitle className={classes.title}>
          Select a Palette Emoji {paletteEmoji}
        </DialogTitle>
        <Picker onSelect={onEmojiSelect} />
        <DialogActions>
          <Button onClick={handleClickClose} className={classes.cancelButton}>
            Cancel
          </Button>
          <Button
            disabled={paletteEmoji === ""}
            onClick={handleClickNext}
            className={classes.saveButton}
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(PaletteSaveFormStyles)(EmojiPicker);
