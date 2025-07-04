import HeroImage from "../../assets/file_0.png";
import CV from "../../assets/SAMPLE.pdf";
import "./hero.css";

export default function Hero() {
  return (
    <section>
      <div className="hero-section flex wrapper gap-4">
        <div className="hero-content">
          <span className="sub-text">Hello there!</span>
          <h1>
            <span className="green-text">I'm Arbini,</span>
            <br />
            Web Developer based in Abuja, Nigeria.
          </h1>
          <p className="para">
            I craft engaging, responsive websites using modern tools like React
            and JavaScript. Let's build something amazing together.
          </p>
          <div className="flex gap-2">
            <a href="#projects" className="btn">
              View My Works
            </a>
            <a href={CV} download="My CV" className="btn border-btn">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={HeroImage} />
        </div>
      </div>
    </section>
  );
}
