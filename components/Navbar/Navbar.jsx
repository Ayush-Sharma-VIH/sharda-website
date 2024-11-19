import { Link } from "react-scroll";
import "./Navbar.css"; 



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Sharda</div>
      <div className="navbar-links">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="Resources" smooth={true} duration={500}>Resources</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar
