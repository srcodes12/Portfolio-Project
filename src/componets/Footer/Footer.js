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
        <Row>
          <Col xs={{ size: 4, offset: 3 }} sm="2">
            <h2 className="d-flex justify-content-around">Links</h2>
            <hr></hr>
            <h4 className="d-flex justify-content-around">
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/directory">Portfolio</Link>
                </li>
                <li>
                  <Link to="/about">Services</Link>
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
          <Col xs="6" sm="3" className="text-center">
            <h2 className="d-flex justify-content-around">Socials</h2>
            <hr></hr>
            <div className="d-flex justify-content-around">
              <a href="https://www.linkedin.com/in/stephen-rogers-443b00255/" target="blank">
                <FontAwesomeIcon icon={faLinkedin} size="4x" />
              </a>
              <a href="https://twitter.com/" target="blank">
                <FontAwesomeIcon icon={faTwitter} size="4x" />
              </a>
              <a href="https://github.com/srcodes12" target="blank">
                <FontAwesomeIcon icon={faGithub} size="4x" className='faGithublogo'/>
              </a>
            </div>
          </Col>
          <Col sm="4" className="text-center">
            <h2 className="d-flex justify-content-around">Contact</h2>
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
