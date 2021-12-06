import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import "../styles/ColorBox.css";

const ColorBox = ({ formattedColor, name, moreUrl }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const changeOverlayState = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 1500);
  };

  const isDarkColor = chroma(formattedColor).luminance() <= 0.2;
  const isLightColor = chroma(formattedColor).luminance() >= 0.6;

  return (
    <CopyToClipboard text={formattedColor} onCopy={changeOverlayState}>
      <div style={{ backgroundColor: formattedColor }} className="ColorBox">
        <div
          style={{ backgroundColor: formattedColor }}
          className={`copy-overlay${showOverlay ? " show" : ""}`}
        />
        <div
          className={`copy-message ${showOverlay && "show"} ${
            isLightColor && "dark-text"
          }`}
        >
          <h1>Copied!</h1>
          <p className={isLightColor && "dark-text"}>{formattedColor}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor && "light-text"}>{name}</span>
          </div>
          <button className={`copy-button ${isLightColor && "dark-text"}`}>
            Copy
          </button>
        </div>
        {moreUrl && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={`see-more ${isLightColor ? " dark-text" : ""}`}>
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
