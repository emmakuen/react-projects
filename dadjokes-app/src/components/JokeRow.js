import React, { useState } from "react";
import Joke from "./Joke";
import Score from "./Score";
import EmojiRating from "./EmojiRating";
import "../styles/JokeRow.css";

const JokeRow = ({ joke = "", id, addScore, subtractScore, score }) => {
  const increaseScore = () => {
    addScore(id);
  };

  const decreaseScore = () => {
    subtractScore(id);
  };

  return (
    <div className="JokeRow">
      <Score score={score} up={increaseScore} down={decreaseScore} />
      <Joke joke={joke} />
      <EmojiRating score={score} />
    </div>
  );
};

export default JokeRow;
