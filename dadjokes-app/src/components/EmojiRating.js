import React from "react";

const emojis = ["😡", "😖", "😐", "😃", "😂", "🤣"];

const EmojiRating = ({ score = 0 }) => {
  const selectEmoji = (score) => {
    if (score > 10) return emojis[5];
    if (score > 7) return emojis[4];
    if (score > 3) return emojis[3];
    if (score >= 0) return emojis[2];
    if (score >= -5) return emojis[1];
    if (score < -5) return emojis[0];
  };
  return (
    <div className="EmojiRating">
      <p style={{ fontSize: "2.5rem" }}>{selectEmoji(score)}</p>
    </div>
  );
};

export default EmojiRating;
