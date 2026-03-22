import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Portfolio</h2>

      <ul>
        <li><Link to="hero" smooth={true}>Home</Link></li>
        <li><Link to="about" smooth={true}>About</Link></li>
        <li><Link to="services" smooth={true}>Services</Link></li>
        <li><Link to="work" smooth={true}>Work</Link></li>
        <li><Link to="contact" smooth={true}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;