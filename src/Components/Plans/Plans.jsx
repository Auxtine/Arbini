import "./plans.css";
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function Plans() {
  const renderPlansData = plansData.map((plan) => {
    return (
      <div className="card" key={plan.id}>
        <div className="bg-header flex between">
          <div>
            <strong>{plan.title}</strong>
            <h5 className="mt-1">
              {plan.price}
              <small>/{plan.unit}</small>
            </h5>
          </div>
          <a
            href="#"
            className="icon-container black-inverse rotate self-start"
          >
            <FaArrowRight />
          </a>
        </div>

        <ul>
          {plan.features.map((list) => {
            return (
              <li
                className="feature flex gap-1 mt-1"
                style={{ opacity: list.included ? 1 : 0.15 }}
                key={list.id}
              >
                <span className="check">
                  <FaCheck />
                </span>
                {list.label}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <section>
      <div className="wrapper p-block-9 border-btm">
        <div className="flex between gap-4">
          <div>
            <span className="sub-text overlay-text" datatype="Pricing Table">
              Pricing Table
            </span>
            <h2>
              My <span className="green-text">Pricing Model</span>
            </h2>
          </div>

          <a href="#contact-me" className="btn self-end">
            Get Started
          </a>
        </div>
        <div className="flex mt-5 gap-5">{renderPlansData}</div>
      </div>
    </section>
  );
}

const plansData = [
  {
    id: 1,
    title: "Website Project",
    price: "From $300",
    unit: "Project",
    highlighted: true,
    features: [
      { id: 1, label: "Custom website (up to 5 pages", included: true },
      { id: 2, label: "Responsive design", included: true },
      { id: 3, label: "Contact form integration", included: true },
      { id: 4, label: "Basic SEO setup", included: true },
      { id: 5, label: "Social media links", included: true },
      { id: 6, label: "1 round of revision", included: true },
      {
        id: 7,
        label: "Extra features of request (may cost more)",
        included: false,
      },
    ],
  },
  {
    id: 2,
    title: "Hourly",
    price: "$15",
    unit: "Hour",
    highlighted: true,
    features: [
      { id: 1, label: "Bug fixing & quick fixes", included: true },
      { id: 2, label: "Small layout adjustments", included: true },
      {
        id: 3,
        label: "Adding small features (e.g., button, link)",
        included: true,
      },
      { id: 4, label: "Consultation call (on request)", included: true },
      { id: 5, label: "Monthly backup & security check", included: false },
      { id: 6, label: "Performance optimization", included: false },
      { id: 7, label: "Priority support", included: false },
    ],
  },
  {
    id: 3,
    title: "Monthly",
    price: "$500",
    unit: "Month",
    highlighted: true,
    features: [
      { id: 1, label: "All hourly services included", included: true },
      { id: 2, label: "Regular content or feature updates", included: true },
      { id: 3, label: "Monthy backup & security check", included: true },
      { id: 4, label: "Consultation call (1 per month)", included: true },
      { id: 5, label: "Performance optimization", included: true },
      { id: 6, label: "Basic SEO improvements", included: true },
      { id: 7, label: "Priority support", included: false },
    ],
  },
  {
    id: 4,
    title: "Quarterly",
    price: "$1,200",
    unit: "3 Months",
    highlighted: true,
    features: [
      { id: 1, label: "All monthly service included", included: true },
      { id: 2, label: "Full website review and improvements", included: true },
      { id: 3, label: "Multiple features or pages", included: true },
      { id: 4, label: "Performance & speed optimization", included: true },
      { id: 5, label: "Basic SEO & analytics report", included: true },
      { id: 6, label: "2 consultation calls per quarter", included: true },
      { id: 7, label: "Priority support", included: true },
    ],
  },
];
