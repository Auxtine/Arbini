import { FaLaptopCode, FaArrowRight, FaPaintBrush } from "react-icons/fa";
import "./services.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsLightningChargeFill } from "react-icons/bs";
import { FiLayout } from "react-icons/fi";

export default function Services() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard((prevId) => (prevId === id ? null : id));
  };

  const renderServicesData = servicesData.map((service) => {
    return (
      <div className="card design" key={service.id}>
        <span className="service-icon">{service.icon}</span>
        <h4 className="m-block-1">{service.title}</h4>
        <p
          className={`m-block-1 ${
            activeCard === service.id ? "" : "hide-text"
          }`}
        >
          {service.description}
        </p>
        <a
          href="#"
          className="link"
          onClick={(e) => {
            e.preventDefault();
            toggleCard(service.id);
          }}
        >
          {activeCard === service.id ? "Show Less" : "Learn More"} &nbsp;
          <FaArrowRight className="arrow green-text" />
        </a>
      </div>
    );
  });
  return (
    <section>
      <div className="wrapper p-block-9 border-btm">
        <div className="flex between gap-4">
          <div>
            <span className="sub-text overlay-text" datatype="Services">
              My Specialization
            </span>
            <h2>
              <span className="green-text">Services</span> I Provide
            </h2>
          </div>

          <Link to="/services" className="btn self-end">
            View All Services
          </Link>
        </div>

        <div className="flex gap-2 stretch mt-5">{renderServicesData}</div>
      </div>
    </section>
  );
}

const servicesData = [
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
];
