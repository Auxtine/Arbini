// src/Components/Services/AllServices.jsx
import { FaPenRuler, FaPenNib, FaLaptopCode } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./services.css";
import { BsClipboardCheck, BsLightningChargeFill } from "react-icons/bs";
import { FiLayout, FiSearch } from "react-icons/fi";
import {
  FaBug,
  FaGithub,
  FaPaintBrush,
  FaPlug,
  FaTachometerAlt,
} from "react-icons/fa";

const allServicesData = [
  {
    id: 1,
    title: "Responsive Web Development",
    description:
      "I build websites that look and work great on desktops, tablets, and mobile devices using HTML, CSS, and JavaScript framworks like React.",
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "Single Page Application (SPA)",
    description:
      "I create fast, seamless, and interactive SPAs using React to deliver modern user experiences.",
    icon: <BsLightningChargeFill />,
  },
  {
    id: 3,
    title: "UI Implementation from Designs",
    description:
      "I turn Figma, Adobe XD, or Sketch designs into fully functional, pixel-perfect websites with clean, maintable code.",
    icon: <FiLayout />,
  },
  {
    id: 4,
    title: "Website Redesign or Revamp",
    description:
      "I modernize outdated sites with a fresh look, better layout, and improved usability.",
    icon: <FaPaintBrush />,
  },
  {
    id: 5,
    title: "Performance Optimization",
    description:
      "I improve loading speed, responsiveness, and accessibility through clean code, image optimization, and smart rendering.",
    icon: <FaTachometerAlt />,
  },
  {
    id: 6,
    title: "Basic SEO Setup",
    description:
      "I structure websites with SEO-friendly HTML, meta tags, and alt attributes to improve visibility on search engines.",
    icon: <FiSearch />,
  },
  {
    id: 7,
    title: "Version Control & Collaboration",
    description:
      "I can use Git and GitHub to collaborate on projects, manage code versions, and work with teams efficiently.",
    icon: <FaGithub />,
  },
  {
    id: 8,
    title: "Form Handling & Validation",
    description:
      "I build and validate forms using HTML5 or libraries like Formik to ensure accurate and secure data submission.",
    icon: <BsClipboardCheck />,
  },
  {
    id: 9,
    title: "API Integration",
    description:
      "I connect frontend apps with REST APIs to display dynamic content — e.g., weather, products, or user data.",
    icon: <FaPlug />,
  },
  {
    id: 10,
    title: "Bug Fixes & Maintenance",
    description:
      "I troubleshoot and fix layout issues, responsiveness problems, and JavaScript errors to keep websites running smoothly.",
    icon: <FaBug />,
  },
];

export default function AllServices() {
  return (
    <section className="wrapper p-block-9">
      <Link to="/" className="btn m-block-2">
        ← Back to Home
      </Link>
      <h2 className="m-block-3">All Services</h2>
      <div className="flex gap-2 stretch">
        {allServicesData.map((service) => (
          <div key={service.id} className="card design">
            <span className="service-icon">{service.icon}</span>
            <h4 className="m-block-1">{service.title}</h4>
            <p className="m-block-1">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
