import { FaPenRuler } from "react-icons/fa6";
import { FaPenNib, FaLaptopCode, FaArrowRight } from "react-icons/fa";
import "./services.css";
import { useState } from "react";

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

          <a href="#" className="btn self-end">
            View All Services
          </a>
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
    icon: <FaPenRuler />,
  },
  {
    id: 2,
    title: "Single Page Application (SPA)",
    description:
      "I create fast, seamless, and interactive SPAs using React to deliver modern user experiences.",
    icon: <FaPenNib />,
  },
  {
    id: 3,
    title: "UI Implementation from Designs",
    description:
      "I turn Figma, Adobe XD, or Sketch designs into fully functional, pixel-perfect websites with clean, maintable code.",
    icon: <FaLaptopCode />,
  },
  {
    id: 4,
    title: "Website Redesign or Revamp",
    description:
      "I modernize outdated sites with a fresh look, better layout, and improved usability.",
    icon: <FaLaptopCode />,
  },
];
