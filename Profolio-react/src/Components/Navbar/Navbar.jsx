import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="hero" smooth={true} className="logo">
          <span className="logo-text">Shenori</span>
          <span className="logo-dot">.</span>
        </Link>

        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          {navLinks.map((link, index) => (
            <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://www.linkedin.com/in/shenori-perera-b24476292/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Let's Talk
        </a>

        <button
          className={`mobile-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
