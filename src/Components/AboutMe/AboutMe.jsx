import "./aboutme.css";
import AboutImage from "../../assets/bg-image1.png";
import CV from "../../assets/SAMPLE.pdf";

export default function AboutMe() {
  return (
    <section>
      <div className="flex gap-5 wrapper p-block-9 border-btm">
        <div className="about-image">
          <img src={AboutImage} />
        </div>
        <div className="about-content">
          <span className="sub-text overlay-text" datatype="About Me">
            About Me
          </span>
          <h2>
            Who is <span className="green-text">Arbini?</span>
          </h2>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            molestiae corrupti sunt. Rerum velit sint quasi tempora, hic maiores
            ex maxime ullam fugit, excepturi iusto quae explicabo odio,
            veritatis libero!
          </p>
          <div className="flex gap-2 m-block-3">
            <div>
              <h6>6000+</h6>
              <p>Projects Completed</p>
            </div>
            <div>
              <h6>20+</h6>
              <p>Industry Covered</p>
            </div>
            <div>
              <h6>06+</h6>
              <p>Years Of Experience</p>
            </div>
          </div>
          <a href={CV} download="My CV" className="btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
