import { FaAsterisk } from "react-icons/fa";
import "./headline.css";

export default function Headline() {
  return (
    <section className="headline">
      <div className="moving-text">
        <div className="container">
          <h5>Web Design</h5>
          <FaAsterisk className="star" />
          <h5>App Design</h5>
          <FaAsterisk className="star" />
          <h5>Responsive Design</h5>
          <FaAsterisk className="star" />
          <h5>UI/UX Design</h5>
          <FaAsterisk className="star" />
        </div>
        <div className="container">
          <h5>Web Design</h5>
          <FaAsterisk className="star" />
          <h5>App Design</h5>
          <FaAsterisk className="star" />
          <h5>Responsive Design</h5>
          <FaAsterisk className="star" />
          <h5>UI/UX Design</h5>
          <FaAsterisk className="star" />
        </div>
        <div className="container">
          <h5>Web Design</h5>
          <FaAsterisk className="star" />
          <h5>App Design</h5>
          <FaAsterisk className="star" />
          <h5>Responsive Design</h5>
          <FaAsterisk className="star" />
          <h5>UI/UX Design</h5>
          <FaAsterisk className="star" />
        </div>
      </div>
    </section>
  );
}
