import React from "react";
import JokeRow from "./JokeRow";
import "../styles/JokeList.css";

const JokeList = ({ jokes = [], addScore, subtractScore }) => {
  return (
    <div className="JokeList">
      {jokes.length > 0 &&
        jokes.map((joke) => (
          <JokeRow
            joke={joke.text}
            key={joke.id}
            id={joke.id}
            score={joke.score}
            addScore={addScore}
            subtractScore={subtractScore}
          />
        ))}
    </div>
  );
};

export default JokeList;
