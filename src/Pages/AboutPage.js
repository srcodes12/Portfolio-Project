import React, { useState } from 'react';
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Collapse,
  Col,
  Row,
} from 'reactstrap';
import './AboutPage.css';
import hs from '../assets/images/headshotimg.png';

const AboutPage = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
      <div style={{display: 'flex', justifyContent: 'center', width: '100%',}}>
        <Container className='about-container'>
          <Card className='mb-3 about-card'>
            <CardTitle tag="h1" onClick={toggle} className="collapsible-title">About Me</CardTitle>
            <Collapse isOpen={isOpen}>
              <hr></hr>
              <CardBody>
                <Row>
                  <Col md="6">
                    <CardText>
                      As a passionate web developer, I've always been fascinated by the ever-evolving world of technology. Over the years, I've honed my skills and embraced the power and flexibility of React to bring ideas to life on the web.
                    </CardText>
                    <CardText>
                      React's component-based architecture, combined with its vibrant ecosystem, enables me to build scalable and maintainable applications. Whether it's a single-page application or a complex web platform, I always strive for performance, user experience, and code quality.
                    </CardText>
                  </Col>
                  <Col md="6">
                    <img src={hs} alt="Your Portrait" className="about-image"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md="12">
                    <h2>My Journey</h2>
                    <CardText>
                      My journey into web development began when I stumbled upon a basic HTML and CSS tutorial online. The ability to create and control a visual web interface was intriguing. Over the years, I transitioned from creating basic static web pages to developing dynamic web applications using JavaScript and, eventually, React.
                    </CardText>
                    <CardText>
                      Along the way, I've collaborated with amazing teams, faced challenging problems, and learned to adopt best practices. Every project is a new learning experience, and I'm always eager to delve into new technologies and methodologies.
                    </CardText>
                  </Col>
                </Row>
              </CardBody>
            </Collapse>
          </Card>
        </Container>
      </div>
    );
};

export default AboutPage;