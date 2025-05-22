import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from "../assets/AWIN123.png"; // Ensure the path is correct

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleToggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#Home" onClick={(e) => handleNavClick(e, "Home")}>
          <img src={logo} alt="Awin Logo" />
        </a>
      </div>
      <div className={`menu-toggle ${isMobile ? 'active' : ''}`} onClick={handleToggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
        <li>
          <a href="#Home" onClick={(e) => handleNavClick(e, "Home")}>Home</a>
        </li>
        <li>
          <a href="#About" onClick={(e) => handleNavClick(e, "About")}>About</a>
        </li>
        <li>
          <a href="#Contact" onClick={(e) => handleNavClick(e, "Contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
