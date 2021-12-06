import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import chroma from "chroma-js";
import "../styles/ColorBox.css";

const formatLightColor = (props) => {
  return chroma(props.formattedColor).luminance() >= 0.5
    ? "rgb(112, 112, 112)"
    : "rgba(255, 255, 255, 0.8)";
};

const styles = {
  colorBox: {
    width: "20%",
    height: (props) => (props.moreUrl ? "25%" : "50%"),
    margin: "0",
    padding: "0",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s",
    },
  },
  copyText: {
    fontWeight: "100",
    fontSize: "2rem",
    color: (props) => formatLightColor(props),
  },
  colorName: {
    color: (props) => formatLightColor(props),
  },
  seeMore: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    position: "absolute",
    bottom: "0",
    right: "0",
    border: "none",
    margin: "0",
    padding: "5px 20px",
    textTransform: "uppercase",
    fontSize: "14px",
    color: (props) => formatLightColor(props),
  },

  copyButton: {
    width: "100px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    border: "none",
    background: "rgba(255, 255, 255, 0.4)",
    fontSize: "1rem",
    padding: "7px",
    textTransform: "uppercase",
    textDecoration: "none",
    color: (props) => formatLightColor(props),
    opacity: "0",
  },

  boxContent: {
    position: "absolute",
    padding: "10px",
    left: "0",
    bottom: "0",
    color: "rgb(46, 46, 46)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0)",
    transition: "transform 0.6s ease-in-out",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },

  copyMessage: {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    top: "0",
    color: (props) => formatLightColor(props),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    flexDirection: "column",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px rgba(0, 0, 0, 0.1)",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      padding: "1rem",
      width: "100%",
      marginBottom: "0",
      textTransform: "uppercase",
    },
  },
  showCopyMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "20",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
  },
};

const ColorBox = ({ formattedColor, name, moreUrl, classes }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const changeOverlayState = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={formattedColor} onCopy={changeOverlayState}>
      <div
        style={{ backgroundColor: formattedColor }}
        className={classes.colorBox}
      >
        <div
          style={{ backgroundColor: formattedColor }}
          className={`${classes.copyOverlay} ${
            showOverlay && classes.showOverlay
          }`}
        />
        <div
          className={`${classes.copyMessage} ${
            showOverlay && classes.showCopyMessage
          }`}
        >
          <h1>Copied!</h1>
          <p className={classes.copyText}>{formattedColor}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {moreUrl && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default withStyles(styles)(ColorBox);
