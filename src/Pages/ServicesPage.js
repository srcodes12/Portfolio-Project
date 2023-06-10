import React, { useState } from 'react';
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Collapse
} from 'reactstrap';
import './ServicesStyles.css';

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
    backgroundSize: '20px 20px',
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
              <CardText style={{ fontSize: '15px' }}>
                Specializing in modern front-end technologies, I can help bring your vision to life with a responsive and interactive website.
              </CardText>
            </CardBody>
          </Collapse>
        </Card>
        <Card className='mb-3' style={{ width: '100%'}}>
          <CardTitle tag="h1" onClick={toggle2} className="collapsible-title">Custom UI Design</CardTitle>
          <Collapse isOpen={isOpen2}>
            <CardBody>
              <CardText style={{ fontSize: '15px',}}>
                I provide custom UI design services tailored to your needs.
                From conceptualizing to final implementation, I aim to create user-friendly designs that not only look good but also enhance user experience.
              </CardText>
            </CardBody>
          </Collapse>
        </Card>
        <Card className='mb-3'>
          <CardTitle tag="h1" onClick={toggle3} className="collapsible-title">Responsive Design</CardTitle>
          <Collapse isOpen={isOpen3}>
            <CardBody>
              <CardText style={{ fontSize: '15px' }}>
                With a mobile-first approach, I ensure that your website looks great and functions flawlessly across all devices, be it desktop, tablet, or mobile.
              </CardText>
            </CardBody>
          </Collapse>
        </Card>
      </Container>
    </div>
  );
};

export default ServicesPage;
