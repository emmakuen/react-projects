import "./intro.css";
import MouseScroll from "./MouseScroll";

const IntroSection = () => {
  return (
    <section className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">
            Hello,
            <br /> I'm <span className="i-name">Emma</span>.
          </h2>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Data Analyst</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
      <div className="i-right">
        <svg
          className="i-bg"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#DF6668"
            d="M56.1,-46.2C66.1,-32.2,63.1,-9.2,57.6,12.5C52.1,34.3,44.3,55,29.8,61.9C15.4,68.8,-5.6,62,-23.4,52.1C-41.3,42.2,-56,29.2,-63.8,10.3C-71.5,-8.7,-72.3,-33.5,-60.5,-47.8C-48.7,-62.2,-24.4,-66.1,-0.7,-65.6C23,-65.1,46.1,-60.1,56.1,-46.2Z"
            transform="translate(100 100)"
          />
        </svg>
        <img src="/assets/images/me.png" alt="" className="i-img" />
      </div>
      <MouseScroll />
    </section>
  );
};

export default IntroSection;
