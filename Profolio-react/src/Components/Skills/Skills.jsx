import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 75 },
    { name: "Java", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "Node.js", level: 70 },
    { name: "SQL", level: 75 },
    { name: "React", level: 70 },
  ];

  const tools = ["VS Code", "IntelliJ", "MySQL", "Figma", "Canva", "Git/GitHub", "NetBeans"];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>
        <div className="skills-content">
          <div className="programming-skills">
            <h3>Programming Languages</h3>
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="tools-section">
            <h3>Tools & Software</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-item">{tool}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;