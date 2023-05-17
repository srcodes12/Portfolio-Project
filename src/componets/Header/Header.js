import { useState, useEffect } from 'react'
import {
  Navbar,
  NavbarBrand,
  isCollapsed,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Col,
  Row,
  Button,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { GrHomeRounded } from 'react-icons/gr'
import './Header.css'
import fs from '../../assets/images/fs.png'
import sr from '../../assets/images/sr.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setShowToggle(true);
        
      } else {
        setShowToggle(false);
        setIsOpen(false)
      }
    };
  

    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
  <>
      {showToggle && (
            <button className="navbar-toggle" onClick={toggleNavbar}>
            Toggle Navigation
          </button>
          )}

    <div className={`sidenav ${isOpen ? 'collapsed' : ''}`}>
    {showToggle && (
            <button className="navbar-toggle" onClick={toggleNavbar}>
            Toggle Navigation
          </button>
          )}

    <a href='/'>

      <img src={sr} width="90%" className="mt-5" alt="Stephen Rogers" />
      <img
        src={fs}
        width="70%"
        className="rounded-circle"
        id="headShot"
        alt="HeadShot"
      />
      </a>
      <div>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink className="nav-link" to="/services">
          Services
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </div>

      <div className="d-flex justify-content-start ">
        <a href="https://www.linkedin.com/in/stephen-rogers-443b00255/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://github.com/srcodes12" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
    </>
  );
};

export default Header;