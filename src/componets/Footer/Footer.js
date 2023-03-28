import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-light site-footer mt-5" >
      <Container className="">
        <hr>
        </hr>
        <Row >
          <Col xs={{ size: 4, offset: 3 }} sm='2' >
          <h2>Links</h2>
                        <h4><ul className='list-unstyled '>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/directory'>Portfolio</Link>
                            </li>
                            <li>
                                <Link to='/about'>Services</Link>
                            </li>
                            <li>
                                <Link to='/contact'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul></h4>
          </Col>
          <Col xs='6' sm='3' className='text-center'>
            <h2 className="d-flex justify-content-around">Socials</h2>
            <div className="d-flex justify-content-around">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faLinkedin} size="4x" />
              </a>
              <a href="https://twitter.com/">
                <FontAwesomeIcon icon={faTwitter} size="4x" />
              </a>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} size="4x" />
              </a>
            </div>
          </Col>
          <Col sm='4' className='text-center' >
            <h2 className="d-flex justify-content-around">Contact</h2>
            <ul className="list-unstyled d-flex justify-content-around" >
              <li><h4>Albqu, New Mexico</h4></li>
              <li><h4>(505) 785-1719</h4></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr>
    </hr>
    </footer>
    
  )
}

export default Footer;
