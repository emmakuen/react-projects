import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../styles/Score.css";

const Score = ({ up, down, score }) => {
  const getColor = (score) => {
    if (score >= 10) return [0, 255, 0];
    else if (score < 10 && score >= 0) {
      let green = 25 * score;
      let blue = 255 - green;
      return [0, green, blue];
    } else if (score < 0) {
      let red = -25 * score;
      let blue = 255 - red;
      return [red, 0, blue];
    }
  };

  return (
    <div
      className="Score"
      style={{ border: `3px solid rgba(${getColor(score)}, 0.5)` }}
    >
      <p>
        <i className="arrow up icon" onClick={up} />
        <span className="Score-num">{score}</span>
        <i className="arrow down icon" onClick={down} />
      </p>
    </div>
  );
};

export default Score;
