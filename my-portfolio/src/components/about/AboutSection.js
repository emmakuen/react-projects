import "./about.css";
import Achievement from "./Achievement";

const AboutSection = () => {
  return (
    <section className="a">
      <div className="a-left">
        <div className="a-card">
          <img src="/assets/images/books.png" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div className="a-text">
          <h2 className="title">About Me</h2>
          <p className="a-sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            reprehenderit.
          </p>
          <p className="a-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            magnam maxime consequatur tenetur dolor deserunt minima vitae quis
            est. Voluptate at cum nam ad voluptatem mollitia quaerat.
          </p>
        </div>
        <Achievement
          title="Yonsei University"
          desc="Completed Master's Degree"
        />
        <Achievement title="DKBMC" desc="Developer and BI Consultant" />
      </div>
    </section>
  );
};

export default AboutSection;
