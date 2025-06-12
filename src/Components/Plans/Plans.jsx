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
      <div className="wrapper p-block-9">
        <div className="flex between gap-4">
          <div>
            <span className="sub-text overlay-text" datatype="Pricing Table">
              Pricing Table
            </span>
            <h2>
              My <span className="green-text">Pricing Model</span>
            </h2>
          </div>

          <a href="#" className="btn self-end">
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
    title: "Hourly",
    price: "$80",
    unit: "Hour",
    highlighted: true,
    features: [
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: false },
      { id: 1, label: "lorem", included: false },
      { id: 1, label: "lorem", included: false },
      { id: 1, label: "lorem", included: false },
    ],
  },
  {
    id: 2,
    title: "Monthly",
    price: "$9,600",
    unit: "Month",
    highlighted: true,
    features: [
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: false },
      { id: 1, label: "lorem", included: false },
    ],
  },
  {
    id: 3,
    title: "Quarterly",
    price: "$28,000",
    unit: "Qtr",
    highlighted: true,
    features: [
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
      { id: 1, label: "lorem", included: true },
    ],
  },
];
