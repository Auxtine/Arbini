import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <section>
      <div className="wrapper">
        <div className="flex between border-btm p-block-2 gap-4">
          <h2>
            Let's <span className="green-text">Connect</span> There
          </h2>
          <a href="#contact-me" className="btn self-end">
            Hire Me Now
          </a>
        </div>
        <div className="p-block-7 flex flex-start gap-4">
          <div className="footer-wrapper">
            <a href="#" className="logo">
              <span>A</span> Arbini.dev
            </a>

            <p className="mt-2">
              Frontend developer passionate about turning ideas into
              user-friendly websites. Based in Abuja, Nigeria.
            </p>

            <div className="flex gap-1 mt-2">
              <a href="#" className="icon-container green-inverse">
                <FaFacebookF />
              </a>
              <a href="#" className="icon-container green-inverse">
                <FaXTwitter />
              </a>
              <a href="#" className="icon-container green-inverse">
                <FaPinterestP />
              </a>
              <a href="#" className="icon-container green-inverse">
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/ezra-austine"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container green-inverse"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <ul className="footer-wrapper">
            <li>
              <h6>Navigation</h6>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                Home
              </a>
            </li>
            <li className="mt-2">
              <a href="#services" className="link">
                Services
              </a>
            </li>
            <li className="mt-2">
              <a href="#about-me" className="link">
                About me
              </a>
            </li>
            <li className="mt-2">
              <a href="#projects" className="link">
                Projects
              </a>
            </li>
            <li className="mt-2">
              <a href="#testimonials" className="link">
                Testimonials
              </a>
            </li>
            <li className="mt-2">
              <a href="#contact-me" className="link">
                Contact me
              </a>
            </li>
          </ul>

          <ul className="footer-wrapper">
            <li>
              <h6>Contact</h6>
            </li>
            <li className="mt-2">
              <span href="#" className="link">
                +234-813-8464-573
              </span>
            </li>
            <li className="mt-2">
              <a
                href="mailto:augustineezra@gmail.com?subject=Hello Ezra&body=I saw your portfolio and would like to talk!"
                className="link"
              >
                augustineezra@gmail.com
              </a>
            </li>
            <li className="mt-2">
              <a
                href="https://www.linkedin.com/in/ezra-austine"
                className="link"
              >
                linkedin.com/in/ezra-austine
              </a>
            </li>
            <li className="mt-2">
              <span href="#" className="link">
                Airport road,
                <br />
                Abuja, Nigeria.
              </span>
            </li>
          </ul>

          <div className="footer-wrapper">
            <h6>Get the latest Information</h6>
            <div className="footer-input mt-2 flex stretch">
              <input
                type="email"
                autoComplete="off"
                placeholder="Email Here"
                className="email-field"
              />
              <button className="input-btn">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="wrapper flex between">
          <p>Copyright &copy; Arbini. All Rights Reserved</p>
          <p>User Terms & condition | Privacy Policy</p>
        </div>
      </div>
    </section>
  );
}
