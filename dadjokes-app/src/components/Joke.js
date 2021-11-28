import React from "react";

const Joke = ({ joke = "" }) => {
  return <div className="Joke">{joke && <p>{joke}</p>}</div>;
};

export default Joke;
