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

        <div className="gap-5 mt-5">
          <Card
            Item={education}
            title="Education"
            icon={<RiGraduationCapFill />}
          />
          <Card
            Item={otherCertificates}
            title="Other Certifications"
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
    institute: "University of Abuja",
    subtitle: "MSc In Financial Mathematics (Awaiting result)",
    date: "2022-2025",
  },
  {
    id: 2,
    institute: "Federal University of Lafia, Nasarawa state",
    subtitle: "BSc In Mathematics",
    date: "2012-2016",
  },
];

const otherCertificates = [
  {
    id: 1,
    institute: "NCWD ICT department, Abuja",
    subtitle: "Web Design and Programming",
    date: "Sept 2024",
  },
  {
    id: 2,
    institute: "Rhema Redemption World Outreach, Abuja",
    subtitle: "Diploma - Computer Training",
    date: "Nov 2011",
  },
];

const workExperience = [
  {
    id: 1,
    institute: "Self employed",
    subtitle: "Web Developer",
    date: "2025-present",
  },
  {
    id: 2,
    institute: "Chinox Guest Inn, Wuse, Abuja",
    subtitle: "Supervisor | Receptionist | Waiter",
    date: "Jan '21 Oct '22",
  },
  {
    id: 3,
    institute: "Gifted International Academy, Abuja",
    subtitle: "Mathematics Teacher",
    date: "Jan-Dec 2019",
  },
  {
    id: 4,
    institute: "Ehugbo Technical College, Ebonyi State",
    subtitle: "Mathematics Teacher (NYSC)",
    date: "May '17 - Apr '18",
  },
];
