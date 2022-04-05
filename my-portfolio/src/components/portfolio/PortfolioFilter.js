import React from "react";

const PortfolioFilter = ({ text, isActive, id, onClick }) => {
  return (
    <li className={`pl-filter${isActive}`} onClick={onClick} id={id}>
      {text}
    </li>
  );
};

export default PortfolioFilter;
