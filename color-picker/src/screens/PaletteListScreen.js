import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { blue, red } from "@mui/material/colors";

import MiniPalette from "../components/MiniPalette";

import { withStyles } from "@material-ui/styles";
import PaletteListStyles from "../styles/PaletteListStyles";

const PaletteListScreen = ({ palettes, setPalettes, classes }) => {
  let navigate = useNavigate();
  const goToPalette = (id) => {
    navigate(`/palette/${id}`);
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [deletingId, setDeletingId] = useState("");

  const handleDialogOpen = (e, id) => {
    e.stopPropagation();
    setOpenDialog(true);
    setDeletingId(id);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setDeletingId("");
  };

  const deletePalette = () => {
    const updatedPalettes = palettes.filter(
      (palette) => palette.id !== deletingId
    );
    setPalettes(updatedPalettes);
    handleDialogClose();
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.title}>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                {...palette}
                key={palette.id}
                goToPalette={goToPalette}
                openDialog={handleDialogOpen}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog
        open={openDialog}
        aria-labelledby="delete-dialog-title"
        onClose={handleDialogClose}
      >
        <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
        <List>
          <ListItem button onClick={deletePalette}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={handleDialogClose}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default withStyles(PaletteListStyles)(PaletteListScreen);
