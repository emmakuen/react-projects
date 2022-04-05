import "./portfolioList.css";

const PortfolioCard = () => {
  return (
    <>
      <div className="pl-item">
        <img
          src="/assets/images/portfolio/webpage.png"
          alt="webpage"
          className="pl-item-img"
        />
        <h3 className="pl-item-title">Landing Page</h3>
      </div>
    </>
  );
};

export default PortfolioCard;
