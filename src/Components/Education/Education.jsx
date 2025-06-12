import "./education.css";
import { RiGraduationCapFill } from "react-icons/ri";
import { BsSuitcaseLgFill } from "react-icons/bs";

export default function Education() {
  const Card = (props) => {
    return (
      <div className="card design">
        <div className="flex gap-1 border-btm p-bottom-1">
          <div className="icon-container green-inverse">{props.icon}</div>
          <h3>{props.title}</h3>
        </div>

        <div className="mt-2">
          {props.Item.map((education) => {
            return (
              <div className="flex between mt-2" key={education.id}>
                <div>
                  <span className="sub-text">{education.institute}</span>
                  <p>{education.subtitle}</p>
                </div>
                <div className="list">{education.date}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section>
      <div className="wrapper p-block-9 border-btm">
        <div className="text-center">
          <span
            className="sub-text overlay-text middle"
            datatype="Education & Work"
          >
            Education and work
          </span>
          <h2>
            My{" "}
            <span className="green-text">
              Academic & <br /> Professional
            </span>{" "}
            Journey
          </h2>
        </div>

        <div className="flex gap-5 mt-5">
          <Card
            Item={education}
            title="Education"
            icon={<RiGraduationCapFill />}
          />
          <Card
            Item={workExperience}
            title="Work Experience"
            icon={<BsSuitcaseLgFill />}
          />
        </div>
      </div>
    </section>
  );
}

const education = [
  {
    id: 1,
    institute: "National Open University",
    subtitle: "BSc In Visual Arts",
    date: "2012-2014",
  },
  {
    id: 2,
    institute: "Covenant University",
    subtitle: "BSc In Physics",
    date: "2012-2014",
  },
  {
    id: 3,
    institute: "Baze University",
    subtitle: "BSc In Chemistry",
    date: "2012-2014",
  },
];

const workExperience = [
  {
    id: 1,
    institute: "InsideLancer",
    subtitle: "Sebior product designer",
    date: "2012-2014",
  },
  {
    id: 2,
    institute: "Self Employed",
    subtitle: "Visual Arts",
    date: "2012-2014",
  },
  {
    id: 3,
    institute: "Graphic Stdios",
    subtitle: "Web Designer",
    date: "2012-2014",
  },
];
