import React from "react";

const Achievement = (props) => {
  const { title, description, where, period } = props;
  return (
    <div className="a-achievement">
      <img src="/assets/images/bird.png" alt="" className="a-achievement-img" />
      <div className="a-achievement-texts">
        <h4 className="a-achievement-title">
          {title} {where && `- ${where}`}{" "}
          <span className="a-achievement-period">{`(${period})`}</span>
        </h4>
        <p className="a-achievement-desc">{description}</p>
      </div>
    </div>
  );
};

export default Achievement;
