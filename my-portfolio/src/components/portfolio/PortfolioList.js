import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import "./portfolioList.css";
import { portfolioTypes, portfolios } from "./constants";
import PortfolioFilter from "./PortfolioFilter";
const PortfolioList = () => {
  const [selected, setSelected] = useState(portfolioTypes[0].id);
  const handleClick = (e) => setSelected(e.target.id);

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="title">Portfolio</h1>
      <ul className="pl-filters">
        {portfolioTypes.map((portfolioType) => (
          <PortfolioFilter
            text={portfolioType.text}
            key={portfolioType.id}
            id={portfolioType.id}
            isActive={selected === portfolioType.id ? " active" : ""}
            onClick={handleClick}
          />
        ))}
      </ul>
      <div className="pl-card-container">
        {portfolios.map((portfolio) => (
          <PortfolioCard portfolio={portfolio} key={portfolio.id} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
