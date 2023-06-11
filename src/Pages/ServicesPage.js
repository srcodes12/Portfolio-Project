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
import './ServicesStyles.css';
import si2 from '../assets/images/servicesimg2.png'


const ServicesPage = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const toggle3 = () => setIsOpen3(!isOpen3);

  const containerStyle = {
    height: 'auto',
    background:
      'linear-gradient(to right, yellow 4px, transparent 4px) 0 0,' +
      'linear-gradient(to left, yellow 4px, transparent 4px) 100% 100%,' +
      'linear-gradient(to bottom, yellow 4px, transparent 4px) 0 0,' +
      'linear-gradient(to top, yellow 4px, transparent 4px) 100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50px 50px',
    padding: '20px', 
    display: 'inline-block',
  };

  return (
  <div style={{display: 'flex', justifyContent: 'center', width: '100%', marginLeft: '5vw' }}>
    <Container className='mt-5 justify-content-center align-items-center flex-column' style={containerStyle}>
      <Card className='mb-3'>
        <CardTitle tag="h1" onClick={toggle1} className="collapsible-title">Front-end Development</CardTitle>
        <Collapse isOpen={isOpen1}>
          <CardBody>
            <Row>
              <Col md="6">
                <CardText style={{ fontSize: '15px' }}>
                  Specializing in modern front-end technologies, I can help bring your vision to life with a responsive and interactive website.
                </CardText>
              </Col>
              <Col md="6">
                <img src='none' style={{width: '70%', borderRadius: '10px'}} alt="Front-End Development"/>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
      <Card className='mb-3' style={{ width: '100%'}}>
        <CardTitle tag="h1" onClick={toggle2} className="collapsible-title">Custom UI Design</CardTitle>
        <Collapse isOpen={isOpen2}>
          <CardBody>
            <Row>
              <Col md="6">
                <CardText style={{ fontSize: '15px',}}>
                  I provide custom UI design services tailored to your needs. 
                  From conceptualizing to final implementation, I aim to create user-friendly designs that not only look good but also enhance user experience.
                </CardText>
              </Col>
              <Col md="6">
              <img src={si2} style={{width: '70%', borderRadius: '10px'}} alt="Custom UI Design"/>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
      <Card className='mb-3'>
        <CardTitle tag="h1" onClick={toggle3} className="collapsible-title">Responsive Design</CardTitle>
        <Collapse isOpen={isOpen3}>
          <CardBody>
            <Row>
              <Col md="6">
                <CardText style={{ fontSize: '15px' }}>
                  With a mobile-first approach, I ensure that your website looks great and functions flawlessly across all devices, be it desktop, tablet, or mobile.
                </CardText>
              </Col>
              <Col md="6">
                <img src="your-image-url3" alt="Responsive Design"/>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
    </Container>
  </div>
  

  );
};

export default ServicesPage;
