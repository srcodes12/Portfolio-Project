import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-light site-footer mt-5">
      <Container className="">
        <hr></hr>
        <Row className="text-center justify-content-center">
          <Col xs={{ size: 4, offset: 2 }} sm="2" className="justify-content-sm-around">
            <h2>Links</h2>
            <hr></hr>
            <h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </h4>
          </Col>
          <Col xs="6" sm="3" className="text-center justify-content-sm-around">
            <h2>Socials</h2>
            <hr></hr>
            <div>
              <a href="https://www.linkedin.com/in/stephen-rogers-443b00255/" target="blank">
                <FontAwesomeIcon icon={faLinkedin} size="4x" style={{marginRight: '2vh' }} />
              </a>
              <a href="https://twitter.com/" target="blank">
                <FontAwesomeIcon icon={faTwitter} size="4x" />
              </a>
              <a href="https://github.com/srcodes12" target="blank">
                <FontAwesomeIcon icon={faGithub} size="4x" className='faGithublogo' style={{marginLeft: '2vh' }}/>
              </a>
            </div>
          </Col>
          <Col sm="4" className="text-center">
            <h2>Contact</h2>
            <hr></hr>
            <ul className="list-unstyled">
              <li>
                <h4>Albuquerque, New Mexico</h4>
              </li>
              <li>
                <h4>(505)-785-1719</h4>
              </li>
              <li>
                <h4>stephenrogerszk@gmail.com</h4>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr></hr>
    </footer>
  )
}

export default Footer
