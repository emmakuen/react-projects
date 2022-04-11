import "./about.css";
import Achievement from "./Achievement";
import { data } from "./data";
const AboutSection = () => {
  return (
    <section className="a" id="about">
      <div className="a-left">
        <div className="a-card">
          <img src="/assets/images/books.png" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div className="a-text">
          <h2 className="title">{data.title}</h2>
          <p className="a-desc">{data.description}</p>
        </div>
        {data.achievements.map((achievement) => (
          <Achievement {...achievement} key={achievement.title} />
        ))}
        <h3 className="knowledge-title">I'm familiar with:</h3>
        <div className="knowledge-bubbles">
          {data.knowledge.map((item) => (
            <div key={item} className="knowledge-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
