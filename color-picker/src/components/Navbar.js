import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import { Select, MenuItem, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { withStyles } from "@material-ui/styles";
import "rc-slider/assets/index.css";
import NavBarStyles from "../styles/NavBarStyles";

const Navbar = ({ level, handleSliderChange, changeFormat, classes }) => {
  const [format, setFormat] = useState("hex");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
    setOpenSnackbar(true);
    changeFormat(e.target.value);
  };

  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <header className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">
          <span style={{ color: "#eb3d30" }}>C</span>
          <span style={{ color: "#f69100" }}>O</span>
          <span style={{ color: "#9423a8" }}>L</span>
          <span style={{ color: "#00b4cc" }}>O</span>
          <span style={{ color: "#008e81" }}>R</span>
          <span style={{ color: "#e01b5c" }}>S</span>
        </Link>
      </div>
      {level && (
        <div>
          <span className={classes.sliderText}>Level: {level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={handleSliderChange}
            />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={closeSnackbar}
        message={
          <span id="message-id">Format Changed To {format.toUpperCase()}!</span>
        }
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        action={
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        }
      />
    </header>
  );
};

export default withStyles(NavBarStyles)(Navbar);
