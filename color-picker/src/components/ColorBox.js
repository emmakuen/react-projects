import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/ColorBox.css";

const ColorBox = ({ formattedColor, name, moreUrl }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const changeOverlayState = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={formattedColor} onCopy={changeOverlayState}>
      <div style={{ backgroundColor: formattedColor }} className="ColorBox">
        <div
          style={{ backgroundColor: formattedColor }}
          className={`copy-overlay${showOverlay ? " show" : ""}`}
        />
        <div className={`copy-message${showOverlay ? " show" : ""}`}>
          <h1>Copied!</h1>
          <p>{formattedColor}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        {moreUrl && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className="see-more">More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
