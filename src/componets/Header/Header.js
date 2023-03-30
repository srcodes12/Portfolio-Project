import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
    Container,
    Col,
    Row
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { GrHomeRounded } from "react-icons/gr";
import './Header.css';
import fs from '../../assets/images/fs.png';
import sr from '../../assets/images/sr.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';


const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

    return (
    <>
    
    <Container xs='6' sm='3' className='' >
    
    <button className='h4 rounded-3' style={{ alignItems: 'start'}} onClick={toggleCollapse}>{isCollapsed ? 'Open Tab' : 'Close Tab'}</button>
    {isCollapsed ? (<div></div> ) : (
    <div class="sidenav">
        <img src={sr} width='90%'className='mt-5' alt='Stephen Rogers'/>
        <img src={fs} width='70%' className='rounded-circle' id='headShot' alt='HeadShot'/>
        <div>
        <NavLink className='nav-link' to='/'>Home</NavLink>
        <NavLink className='nav-link' to='/portfolio'>Portfolio</NavLink>
        <NavLink className='nav-link' to='/services'>Services</NavLink>
        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
        <NavLink className='nav-link' to='/about'>About</NavLink>
        </div>

            <div className="d-flex justify-content-start ">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://twitter.com/">
                <FontAwesomeIcon icon={faTwitter}  />
              </a>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram}  />
              </a>
            </div>
        </div>
        )}
      </Container>
    </>
  );
};


export default Header;
