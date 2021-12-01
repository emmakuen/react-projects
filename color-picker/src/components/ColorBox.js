import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/ColorBox.css";

const ColorBox = ({ color, name }) => {
  const colorBoxStyle = {
    width: "20%",
    height: "25%",
    backgroundColor: color,
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

  const seeMoreButton = {
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

  return (
    <CopyToClipboard text={color}>
      <div style={colorBoxStyle} className="ColorBox">
        <div className="copy-container">
          <div style={boxContentStyle} className="box-content">
            <span>{name}</span>
          </div>
          <button style={copyButtonStyle} className="copy-button">
            Copy
          </button>
        </div>
        <span style={seeMoreButton} className="see-more">
          More
        </span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
