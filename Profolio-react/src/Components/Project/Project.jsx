import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CrackCode",
      subtitle: "Gamified Learning Platform",
      description: "A gamified learning platform designed to make coding education engaging and interactive.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      year: "2025 - Present",
      type: "Group Project",
      status: "In Progress",
    },
    {
      id: 2,
      title: "BetterMe",
      subtitle: "Personal Development Website",
      description: "Led a team to create a comprehensive personal development website.",
      technologies: ["HTML", "CSS", "JavaScript"],
      year: "2025",
      type: "Group Project (Team Leader)",
      status: "Completed",
    },
    {
      id: 3,
      title: "Hostel Management System",
      subtitle: "Room & Student Management",
      description: "A comprehensive Java application for managing hostel operations.",
      technologies: ["Java", "MySQL", "JavaFX"],
      year: "2025",
      type: "Individual Project",
      status: "Completed",
    },
    {
      id: 4,
      title: "Traffic Data Analysis",
      subtitle: "Data Collection at Junctions",
      description: "Python application for gathering and analyzing traffic data.",
      technologies: ["Python", "Tkinter"],
      year: "2024",
      type: "Individual Project",
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <span className={`status ${project.status === "In Progress" ? "in-progress" : ""}`}>
                {project.status}
              </span>
              <h3>{project.title}</h3>
              <p className="subtitle">{project.subtitle}</p>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <p className="project-meta">{project.type} • {project.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;