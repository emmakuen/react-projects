import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import PortfolioFilter from "./PortfolioFilter";
import { portfolioTypes, portfolios } from "./data";
import "./portfolioList.css";

const LEFT_END_ALL = -1725;
const LEFT_END_FILTERED = -80;
const LEFT_END_ALL_MOBILE = -1970;
const LEFT_END_FILTERED_MOBILE = -280;
const X_START = 0;

const PortfolioList = () => {
  const [selected, setSelected] = useState("all");
  const [selectedPortfolios, setSelectedPortfolios] = useState(portfolios);
  const [left, setLeft] = useState(LEFT_END_ALL);
  const x = useMotionValue(X_START);
  const calculateMobileLeft = (filteredPortfolios) => {
    const multiplier =
      filteredPortfolios.length - 1 >= 0 ? filteredPortfolios.length - 1 : 0;
    return LEFT_END_FILTERED_MOBILE * multiplier;
  };

  useEffect(() => {
    if (selected === "all") {
      setSelectedPortfolios(portfolios);
      x.set(X_START);
      window.screen.width >= 500
        ? setLeft(LEFT_END_ALL)
        : setLeft(LEFT_END_ALL_MOBILE);
      return;
    }
    const filteredPortfolios = portfolios.filter((portfolio) =>
      portfolio.portfolioType.includes(selected)
    );
    setSelectedPortfolios(filteredPortfolios);
    window.screen.width >= 500
      ? setLeft(LEFT_END_FILTERED)
      : setLeft(calculateMobileLeft(filteredPortfolios));
    x.set(X_START);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const handleClick = (e) => setSelected(e.target.id);

  return (
    <section className="portfolio" id="portfolio">
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
            dragConstraints={{ right: 0, left: left }}
            style={{ x }}
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
    </section>
  );
};

export default PortfolioList;
