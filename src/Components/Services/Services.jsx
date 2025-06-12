import { FaPenRuler } from "react-icons/fa6";
import { FaPenNib, FaLaptopCode, FaArrowRight } from "react-icons/fa";
import "./services.css";

export default function Services() {
  const renderServicesData = servicesData.map((service) => {
    return (
      <div className="card design" key={service.id}>
        <span className="service-icon">{service.icon}</span>
        <h4 className="m-block-1">{service.title}</h4>
        <p className="m-block-1 hide-text">{service.description}</p>
        <a href="#" className="link">
          Learn More &nbsp;
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
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam praesentium est deleniti quo dolor? Nisi at culpa dolores itaque earum quaerat minus, architecto molestias quasi vel consectetur numquam nam.",
    icon: <FaPenRuler />,
  },
  {
    id: 2,
    title: "Application Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam praesentium est deleniti quo dolor? Nisi at culpa dolores itaque earum quaerat minus, architecto molestias quasi vel consectetur numquam nam.",
    icon: <FaPenNib />,
  },
  {
    id: 3,
    title: "Website Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam praesentium est deleniti quo dolor? Nisi at culpa dolores itaque earum quaerat minus, architecto molestias quasi vel consectetur numquam nam.",
    icon: <FaLaptopCode />,
  },
];
