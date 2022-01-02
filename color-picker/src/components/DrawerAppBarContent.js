import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import PaletteSaveForm from "./PaletteSaveForm";
import EmojiPicker from "./EmojiPicker";
import DrawerAppBar from "./DrawerAppBar";

import { withStyles } from "@material-ui/styles";
import DrawerAppBarStyles from "../styles/DrawerAppBarStyles";

const DrawerAppBarContent = ({
  open,
  drawerWidth,
  handleDrawerOpen,
  colors,
  palettes,
  setPalettes,
  paletteName,
  setPaletteName,
  paletteEmoji,
  setPaletteEmoji,
  classes,
}) => {
  let navigate = useNavigate();

  const handleSubmit = () => {
    const newPalette = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(/ /g, "-"),
      colors: colors,
      emoji: paletteEmoji,
    };
    setPalettes([...palettes, newPalette]);
    setPaletteEmoji("");
    setPaletteName("");
    navigate("/");
  };

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }, [palettes]);

  const dialogueStages = ["emoji", "name"];
  const [dialogueStage, setDialogueStage] = useState("");

  const handleClickOpen = () => {
    setDialogueStage(dialogueStages[0]);
  };

  const onEmojiSelect = (e) => {
    setPaletteEmoji(e.native);
  };

  const handleClickNext = () => {
    setDialogueStage(dialogueStages[1]);
  };

  const handleClickClose = () => {
    setDialogueStage("");
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
        <div className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <AddBoxIcon />
            </IconButton>
            <Typography
              variant="h6"
              fontSize={{ lg: 25, md: 20, sm: 20, xs: 15 }}
              noWrap
              component="div"
            >
              Create a Palette
            </Typography>
          </Toolbar>
          <div className={classes.formContainer}>
            <Link to="/" className={classes.goBackButton}>
              Go Back
            </Link>
            <Button
              className={classes.saveButton}
              variant="outlined"
              size="small"
              onClick={handleClickOpen}
            >
              Save
            </Button>

            <EmojiPicker
              handleClickClose={handleClickClose}
              dialogueStage={dialogueStage}
              handleClickNext={handleClickNext}
              paletteEmoji={paletteEmoji}
              onEmojiSelect={onEmojiSelect}
            />

            <PaletteSaveForm
              handleSubmit={handleSubmit}
              paletteName={paletteName}
              handleNameChange={handleNameChange}
              palettes={palettes}
              handleClickClose={handleClickClose}
              dialogueStage={dialogueStage}
            />
          </div>
        </div>
      </DrawerAppBar>
    </div>
  );
};

export default withStyles(DrawerAppBarStyles)(DrawerAppBarContent);
