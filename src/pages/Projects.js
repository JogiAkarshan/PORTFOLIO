import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Eco-Volunteer Match Platform",
    description:
      "A full-stack React application designed to connect volunteers with environmental initiatives in Hyderabad.",
    repo: "https://github.com/JogiAkarshan/eco-volunteer-match",
  },
  {
    id: 2,
    title: "AI Alzheimer’s Diagnosis System",
    description:
      "A deep learning project utilizing Hybrid GCN-KAN models and the TADPOLE dataset for medical diagnosis.",
    repo: "https://github.com/JogiAkarshan/ai-alzheimers-diagnosis",
  },
  {
    id: 3,
    title: "E-commerce Product Display",
    description:
      "A modern, responsive product showcase built with React, focusing on clean UI and state management.",
    repo: "https://github.com/JogiAkarshan/ecommerce-product-display",
  },
];

function Projects() {
  return (
    <div className="projects page-fade">
      <header className="projects__header">
        <p className="projects__kicker">Work</p>
        <h1 className="projects__title">Projects</h1>
        <p className="projects__lede">
          Selected work spanning full-stack applications, research-oriented deep learning, and
          product-focused UI.
        </p>
      </header>
      <ul className="project-grid">
        {projects.map((p) => (
          <li key={p.id} className="project-card">
            <div className="project-card__glow" aria-hidden />
            <h2 className="project-card__title">{p.title}</h2>
            <p className="project-card__desc">{p.description}</p>
            <a
              className="project-card__link"
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
