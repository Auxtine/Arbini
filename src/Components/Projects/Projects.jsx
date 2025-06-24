import "./projects.css";
import Project1 from "../../assets/Screenshot.png";
import Project2 from "../../assets/Screenshot.png";
import Project3 from "../../assets/Screenshot.png";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  const renderProjectsData = projectsData.map((project) => {
    return (
      <div className="card flex gap-5 project" key={project.id}>
        <div className="project-image">
          <img src={project.image} />
        </div>
        <div className="project-content">
          <ul className="flex gap-1">
            {project.tech.map((technology) => {
              return (
                <li key={technology.id} className="list">
                  {technology.list}
                </li>
              );
            })}
          </ul>
          <h3 className="mt-2">{project.title}</h3>
          <p className="para">{project.description}</p>
          <a href="#" className="icon-container border-inverse rotate">
            <FaArrowRight />
          </a>
        </div>
      </div>
    );
  });

  return (
    <section id="projects">
      <div className="wrapper p-block-9">
        <div className="flex between gap-4">
          <div>
            <span className="sub-text overlay-text" datatype="My Portfolio">
              My Portfolio
            </span>
            <h2>
              Let's Have A Look <br /> At
              <span className="green-text"> My Portfolio</span>
            </h2>
          </div>

          <a href="#" className="btn self-end">
            View All Projects
          </a>
        </div>

        <div className="flex column gap-2 mt-5">{renderProjectsData}</div>
      </div>
    </section>
  );
}

const projectsData = [
  {
    id: 1,
    title: "This is where you describe the sample of the project you did",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error in aspernatur, consequatur facere incidunt minima magni facilis? Commodi",
    image: Project1,
    tech: [
      {
        id: 1,
        list: "React.js",
      },
      {
        id: 2,
        list: "CSS",
      },
      {
        id: 3,
        list: "JavaScript",
      },
    ],
  },
  {
    id: 2,
    title: "This is where you describe the sample of the project you did",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error in aspernatur, consequatur facere incidunt minima magni facilis? Commodi",
    image: Project2,
    tech: [
      {
        id: 1,
        list: "CSS",
      },
      {
        id: 2,
        list: "JavaScript",
      },
      {
        id: 3,
        list: "React.js",
      },
    ],
  },
  {
    id: 3,
    title: "This is where you describe the sample of the project you did",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error in aspernatur, consequatur facere incidunt minima magni facilis? Commodi",
    image: Project3,
    tech: [
      {
        id: 1,
        list: "JavaScript",
      },
      {
        id: 2,
        list: "React.js",
      },
      {
        id: 3,
        list: "CSS",
      },
    ],
  },
];
