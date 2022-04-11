import React from "react";

const Achievement = ({ title, desc }) => {
  return (
    <div className="a-achievement">
      <img src="/assets/images/bird.png" alt="" className="a-achievement-img" />
      <div className="a-achievement-texts">
        <h4 className="a-achievement-title">Yonsei University</h4>
        <p className="a-achievement-desc">Completed the Master's Degree</p>
      </div>
    </div>
  );
};

export default Achievement;
