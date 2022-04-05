import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import "./portfolioList.css";
const PortfolioList = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="title">Portfolio</h1>
      <ul className="pl-filters">
        <li className="pl-filter active">Featured</li>
        <li className="pl-filter">Web App</li>
        <li className="pl-filter">Mobile App</li>
        <li className="pl-filter">Design</li>
        <li className="pl-filter">BI Dashboard</li>
      </ul>
      <div className="pl-card-container">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </div>
  );
};

export default PortfolioList;
