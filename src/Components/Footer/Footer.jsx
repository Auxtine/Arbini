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
          <a href="#" className="btn self-end">
            Hire Me Now
          </a>
        </div>
        <div className="p-block-7 flex flex-start gap-4">
          <div className="footer-wrapper">
            <a href="#" className="logo">
              <span>A</span> Arbini
            </a>

            <p className="mt-2">
              I'm an experienced web Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quis veniam sequi dolorem hic reprehenderit
              ducimus.
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
              <a href="#" className="link">
                Services
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                About me
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                PProjects
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                Testimonials
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                Contact me
              </a>
            </li>
          </ul>

          <ul className="footer-wrapper">
            <li>
              <h6>Contact</h6>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                +01 234 567 89
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                www.example.com
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                example@gmail.com
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                2324 Royal Avenue
              </a>
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
