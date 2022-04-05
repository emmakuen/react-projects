import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import PortfolioFilter from "./PortfolioFilter";
import { portfolioTypes, portfolios } from "./constants";
import "./portfolioList.css";
const PortfolioList = () => {
  const [selected, setSelected] = useState("all");
  const [selectedPortfolios, setSelectedPortfolios] = useState(portfolios);

  useEffect(() => {
    if (selected === "all") {
      return setSelectedPortfolios(portfolios);
    }
    const filteredPortfolios = portfolios.filter(
      (portfolio) => portfolio.portfolioType === selected
    );
    setSelectedPortfolios(filteredPortfolios);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

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

      {selectedPortfolios && (
        <motion.div className="pl-carousel" whileTap={{ cursor: "grabbing" }}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -1725 }}
            className="pl-card-container"
          >
            {selectedPortfolios.map((portfolio) => (
              <motion.div key={portfolio.id}>
                <PortfolioCard portfolio={portfolio} key={portfolio.id} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PortfolioList;
