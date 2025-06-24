import "./aboutme.css";
import AboutImage from "../../assets/file_0-r.png";
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
            I'm Arbini, a passionate frontend developer based in Abuja, Nigeria.
            I specialize in building modern, responsive websites using tools
            like React, JavaScript, and CSS. My goal is to create user-friendly
            interfaces that not only look great but also function smoothly
            across all devices.
          </p>
          <p className="para">
            I enjoy bringing ideas to life in the browser and constantly
            improving my skills through hands-on projects. Whether it's
            translating a UI design into code or optimizing a site for
            performance, I take pride in writing clean, efficient code.
          </p>
          <p className="para">
            When I'm not coding, I'm likely exploring new tech trends or
            refining my existing projects. I'm always open to exciting
            opportunities and collaborations that challenge me to grow.
          </p>
          <div className="flex gap-2 m-block-3">
            <div>
              <h6>10+</h6>
              <p>Projects Completed</p>
            </div>
            <div>
              <h6>05+</h6>
              <p>Industry Covered</p>
            </div>
            <div>
              <h6>02+</h6>
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
