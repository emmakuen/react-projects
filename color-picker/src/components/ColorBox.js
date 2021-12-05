import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/ColorBox.css";

const ColorBox = ({ formattedColor, name, moreUrl }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const colorBoxStyle = {
    width: "20%",
    height: "25%",
    backgroundColor: formattedColor,
    margin: "0",
    padding: "0",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
  };

  const copyButtonStyle = {
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
    color: "white",
    textTransform: "uppercase",
    opacity: "0",
  };

  const boxContentStyle = {
    position: "absolute",
    padding: "10px",
    left: "0",
    bottom: "0",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  };

  const seeMoreButtonStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    position: "absolute",
    bottom: "0",
    right: "0",
    border: "none",
    margin: 0,
    padding: "5px 20px",
    textTransform: "uppercase",
    fontSize: "14px",
    color: "white",
  };

  const copyOverlayStyle = {
    opacity: "0",
    backgroundColor: formattedColor,
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0)",
    transition: "transform 0.6s ease-in-out",
  };

  const overlayTextStyle = {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    top: "0",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    flexDirection: "column",
  };

  const changeOverlayState = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={formattedColor} onCopy={changeOverlayState}>
      <div style={colorBoxStyle} className="ColorBox">
        <div
          style={copyOverlayStyle}
          className={`copy-overlay${showOverlay && " show"}`}
        />
        <div
          style={overlayTextStyle}
          className={`copy-message${showOverlay && " show"}`}
        >
          <h1>Copied!</h1>
          <p>{formattedColor}</p>
        </div>
        <div className="copy-container">
          <div style={boxContentStyle} className="box-content">
            <span>{name}</span>
          </div>
          <button style={copyButtonStyle} className="copy-button">
            Copy
          </button>
        </div>
        {moreUrl && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span style={seeMoreButtonStyle} className="see-more">
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
