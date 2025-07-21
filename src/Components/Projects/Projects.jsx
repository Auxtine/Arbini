import "./projects.css";
import Project1 from "../../assets/e-commerce.png";
import Project2 from "../../assets/recipe-finder.png";
import Project3 from "../../assets/travel-app.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Projects() {
  const renderProjectsData = projectsData.map((project) => {
    return (
      <div className="card flex flex-576 gap-5 project" key={project.id}>
        <div className="project-image">
          <img src={project.image} />
        </div>
        <div className="project-content">
          <ul className="flex flex-576 gap-1">
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

          <div className="projects-links flex gap-2 items-center mt-2">
            <span className="small-text">View live App:</span>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container border-inverse rotate"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="projects">
      <div className="wrapper p-block-9 border-btm">
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

          <Link to="/projects" className="btn self-end">
            View All Projects
          </Link>
        </div>

        <div className="flex column gap-2 mt-5 ">{renderProjectsData}</div>
      </div>
    </section>
  );
}

const projectsData = [
  {
    id: 1,
    title: "Modern E-Commerce Website",
    description:
      "A responsive e-commerce web app built React.js and styled using And Design. It dynamically fetches and displays product data from DummyJSON API, offering users a clean shopping experience.",
    image: Project1,
    tech: [
      { id: 1, list: "React.js" },
      { id: 2, list: "Ant Design" },
      { id: 3, list: "JavaScript" },
      { id: 4, list: "DummyJSON API" },
    ],
    live: "https://ecomm-antd.vercel.app",
  },
  {
    id: 2,
    title: "Food Recipe Finder App",
    description:
      "A reponsive web app built with React.js, Tailwind CSS and DaisyUI that helps users explore new recipes. Simply enter what you'd like to cook in the search bar, view multiple recipe options, and click any result to watch YouTube videos with step by step preparation guides. You can also tap the favorite button to save recipes you love for quick access later.",
    image: Project2,
    tech: [
      { id: 1, list: "React.js" },
      { id: 2, list: "Tailwind CSS" },
      { id: 3, list: "DaisyUI" },
      { id: 4, list: "JavaSCript" },
    ],
    live: "https://recipe-app2024.vercel.app",
  },
  {
    id: 3,
    title: "Travel Discovery App",
    description:
      "A simple app built with JavaScript and CSS that lets users explore exciting destinations. Users can sign up, browse curated places, and subscribe for the latest travel updates — all styled for a smooth browsing experience.",
    image: Project3,
    tech: [
      { id: 1, list: "JavaScript" },
      { id: 2, list: "CSS" },
      { id: 3, list: "Yarn" },
    ],
    live: "https://travelyarn.vercel.app",
  },
];
