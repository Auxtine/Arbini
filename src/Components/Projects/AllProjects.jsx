import "./projects.css";
import Project1 from "../../assets/e-commerce.png";
import Project2 from "../../assets/recipe-finder.png";
import Project3 from "../../assets/travel-app.png";
import Project4 from "../../assets/Todo.png";
import Project5 from "../../assets/amazon-clone.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AllProjects() {
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
    {
      id: 4,
      title: "Interactive To-Do List App",
      description:
        "A simple yet dynamic to-do list app where you can add tasks to your daily list, tap on completed tasks to strike them out and automatically send them to the bottom, and remove tasks anytime with a delete button. Built with JavaScript and CSS for a clean, responsive interface.",
      image: Project4,
      tech: [
        { id: 1, list: "JavaScript" },
        { id: 2, list: "CSS Modules" },
        { id: 3, list: "React.js" },
      ],
      live: "https://auxtine.github.io/todo-app",
    },
    {
      id: 5,
      title: "Amazon Clone Web App",
      description:
        "A simple Amazon-inspired web page built with vanilla JavaScript and CSS. It fetches product data using a GET ret request from an external API and displays them in a clean, responsive layout — mimicking the look and feel of a real e-commerce site.",
      image: Project5,
      tech: [
        { id: 1, list: "JavaScript" },

        { id: 3, list: "CSS" },
      ],
      live: "https://amazon-clone-aux.vercel.app",
    },
  ];

  return (
    <section className="wrapper p-block-9">
      <div className="flex between gap-4 mb-5">
        <div>
          <Link to="/" className="btn m-block-2">
            ← Back to Home
          </Link>
          <h2>
            Explore <span className="green-text">My Projects</span>
          </h2>
        </div>
      </div>

      <div className="flex column gap-2 mt-5">
        {projectsData.map((project) => (
          <div className="card flex gap-5 project" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <ul className="flex gap-1">
                {project.tech.map((technology) => (
                  <li key={technology.id} className="list">
                    {technology.list}
                  </li>
                ))}
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
        ))}
      </div>
    </section>
  );
}
