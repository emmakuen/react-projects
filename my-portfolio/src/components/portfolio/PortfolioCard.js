import "./portfolioCard.css";

const PortfolioCard = ({ portfolio }) => {
  const { title, subtitle, explanation, portfolioType, frameworks } = portfolio;
  return (
    <>
      <div className="pl-item">
        <div className="pl-item-imgbox">
          <img
            src="/assets/images/portfolio/webpage.jpg"
            alt="webpage"
            className="pl-item-img"
          />
        </div>
        <div className="pl-item-details">
          <h3>
            {title}
            <br />
            <span>{subtitle}</span>
          </h3>
          <p>{explanation}</p>
          <ul className="frameworks">
            {frameworks.map((framework) => (
              <li key={framework}>{framework}</li>
            ))}
          </ul>
          <a href="/" className="action-button">
            View
          </a>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
