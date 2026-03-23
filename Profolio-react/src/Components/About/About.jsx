import "./About.css";

const About = () => {
  const education = [
    {
      period: "2023 - Present",
      title: "BSc Computer Science",
      institution: "University of Westminster | IIT",
      details: "Second Year - Currently studying OOP, Database Systems, Server-side Web Development, and Algorithms",
    },
    {
      period: "2022",
      title: "Foundation Certificate",
      institution: "IIT Campus",
      details: "Completed foundation course in computing fundamentals",
    },
    {
      period: "2009 - 2022",
      title: "Primary & Secondary Education",
      institution: "Good Shepherd Convent – Kottehena",
      details: "G.C.E. O/L: A5, B2, C2 | G.C.E. A/L completed",
    },
  ];

  const achievements = [
    "UoW Problem Solving International Hackathon 2025 - Team Leader",
    "Code Golf 2024 Participant",
    "Assistant PR - Wattala Toastmasters Club 2025",
    "IEEE Student & Computer Society Member - IIT 2025",
    "CMJD Professional Certification - IJSE Campus",
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-tag">Get To Know</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate developer on a journey to create meaningful digital experiences
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro glass-card">
              <h3>Who I Am</h3>
              <p>
                I'm <strong>Shenori Ruwesha</strong>, a second-year Computer Science 
                undergraduate at the University of Westminster (affiliated with IIT). 
                I'm passionate about UI/UX design, front-end and back-end development, 
                creating interface solutions that combine clean code with intuitive 
                user experiences.
              </p>
              <p>
                As an active member of the Toastmasters Club and IEEE Student Society, 
                I continuously work on improving my communication and leadership skills. 
                I dedicate myself to progressive development by staying current with 
                emerging web technologies.
              </p>
              <div className="about-tags">
                <span className="tag">UI/UX Design</span>
                <span className="tag">Frontend Development</span>
                <span className="tag">Backend Development</span>
                <span className="tag">Problem Solving</span>
              </div>
            </div>

            <div className="achievements-section">
              <h3>Achievements & Activities</h3>
              <ul className="achievements-list">
                {achievements.map((achievement, index) => (
                  <li key={index}>
                    <span className="achievement-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-education">
            <h3>Education Journey</h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="education-item glass-card">
                  <div className="education-period">{edu.period}</div>
                  <h4 className="education-title">{edu.title}</h4>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-details">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-cta">
          <a href="/resume.pdf" className="btn-primary" download>
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
