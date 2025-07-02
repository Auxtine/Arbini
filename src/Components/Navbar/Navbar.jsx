import { FiSun } from "react-icons/fi";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import "./navbar.css";
import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";

export default function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header>
      <nav className="flex between wrapper navbar">
        <a href="#" className="logo">
          <span>A</span> Arbini
        </a>

        {/* DESKTOP MENU */}
        <ul className="flex gap-2 desktop-menu">
          <li>
            <a href="#" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="link">
              About me
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact-me" className="link">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex gap-2 nav-action">
          <a
            href="#"
            className="icon-container border-inverse"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <FiSun /> : <IoMoonOutline />}
          </a>
          <a href="#" className="btn">
            Let's Talk
          </a>
          <a href="#" className="hamburger" onClick={toggleMenu}>
            {isMenuActive ? <FaXmark /> : <FaBarsStaggered />}
          </a>
        </div>

        {/* MOBILE MENU */}
        <ul
          className={`mobile-menu ${
            isMenuActive ? "mobile-menu-active" : null
          }`}
        >
          <li>
            <a href="#" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="link">
              About me
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Contact me
            </a>
          </li>
          <li>
            <a href="#" className="btn">
              Let's Talk
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
