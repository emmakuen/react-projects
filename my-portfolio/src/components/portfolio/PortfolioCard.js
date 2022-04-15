import "./portfolioCard.css";

const PortfolioCard = ({ portfolio }) => {
  const { title, subtitle, explanation, imgSrc, frameworks, url } = portfolio;

  return (
    <>
      <div className="pl-item">
        <div className="pl-item-imgbox">
          <img src={imgSrc} alt="webpage" className="pl-item-img" />
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
          {url && url !== "" && (
            <a
              href={url}
              className="action-button"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
