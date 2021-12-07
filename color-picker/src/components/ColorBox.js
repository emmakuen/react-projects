import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import ColorBoxStyles from "../styles/ColorBoxStyles";

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

export default withStyles(ColorBoxStyles)(ColorBox);
