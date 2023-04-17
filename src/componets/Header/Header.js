import { useState } from 'react'
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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const styles = {
    collapsingContent: {
      transition: 'height 1s ease-in-out',
      overflow: 'hidden',
      width: isCollapsed ? ('250px' : 'auto') : ('300px'),
    },
  };

  return (
    <div className="sidenav" style={styles.collapsingContent}>
      <button
        className={`h4 rounded-3 ${isCollapsed ? 'collapsed' : 'expanded'}`}
        style={{ alignItems: 'start' }}
        onClick={toggleCollapse}
      >
        {isCollapsed ? 'Open Tab' : 'Close Tab'}
      </button>

      <img src={sr} width="90%" className="mt-5" alt="Stephen Rogers" />
      <img
        src={fs}
        width="70%"
        className="rounded-circle"
        id="headShot"
        alt="HeadShot"
      />
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
        <a href="https://www.linkedin.com/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://github.com/" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Header;