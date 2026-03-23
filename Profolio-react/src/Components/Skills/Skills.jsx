import "./Skills.css";

const Skills = () => {
  const programmingSkills = [
    { name: "JavaScript", level: 85, icon: "⚡" },
    { name: "Python", level: 75, icon: "🐍" },
    { name: "Java", level: 80, icon: "☕" },
    { name: "HTML/CSS", level: 90, icon: "🎨" },
    { name: "Node.js", level: 70, icon: "🟢" },
    { name: "SQL", level: 75, icon: "🗄️" },
    { name: "React", level: 70, icon: "⚛️" },
  ];

  const softwareSkills = [
    { name: "VS Code", category: "IDE" },
    { name: "IntelliJ", category: "IDE" },
    { name: "NetBeans", category: "IDE" },
    { name: "MySQL", category: "Database" },
    { name: "Figma", category: "Design" },
    { name: "Canva", category: "Design" },
    { name: "Draw.io", category: "Design" },
    { name: "MS Office", category: "Productivity" },
    { name: "Git/GitHub", category: "Version Control" },
  ];

  const softSkills = [
    { name: "Leadership", icon: "👑" },
    { name: "Teamwork", icon: "🤝" },
    { name: "Time Management", icon: "⏰" },
    { name: "Creativity", icon: "💡" },
    { name: "Public Speaking", icon: "🎤" },
    { name: "Problem Solving", icon: "🧩" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A collection of technologies and tools I've worked with throughout my journey
          </p>
        </div>

        <div className="skills-grid">
          {/* Programming Skills */}
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-icon">💻</span>
              Programming Languages
            </h3>
            <div className="programming-skills">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software Skills */}
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-icon">🛠️</span>
              Tools & Software
            </h3>
            <div className="software-skills">
              {softwareSkills.map((skill, index) => (
                <div key={index} className="software-item glass-card">
                  <span className="software-name">{skill.name}</span>
                  <span className="software-category">{skill.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-category soft-skills-section">
            <h3 className="category-title">
              <span className="category-icon">🌟</span>
              Soft Skills
            </h3>
            <div className="soft-skills">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <span className="soft-skill-icon">{skill.icon}</span>
                  <span className="soft-skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="languages-section">
          <h3 className="category-title">
            <span className="category-icon">🌐</span>
            Languages
          </h3>
          <div className="languages">
            <div className="language-item">
              <span className="language-name">Sinhala</span>
              <span className="language-level">Native</span>
            </div>
            <div className="language-item">
              <span className="language-name">English</span>
              <span className="language-level">Fluent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
