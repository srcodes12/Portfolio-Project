import React from 'react';
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

const ServicesPage = () => {
  const containerStyle = {
    height: 'auto',
    background:
      'linear-gradient(to right, yellow 4px, transparent 4px) 0 0,' +
      'linear-gradient(to right, yellow 4px, transparent 4px) 0 100%,' +
      'linear-gradient(to left, yellow 4px, transparent 4px) 100% 0,' +
      'linear-gradient(to left, yellow 4px, transparent 4px) 100% 100%,' +
      'linear-gradient(to bottom, yellow 4px, transparent 4px) 0 0,' +
      'linear-gradient(to bottom, yellow 4px, transparent 4px) 100% 0,' +
      'linear-gradient(to top, yellow 4px, transparent 4px) 0 100%,' +
      'linear-gradient(to top, yellow 4px, transparent 4px) 100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '20px 20px',
    padding: '20px', 
    display: 'inline-block',
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
      <Container className='mt-5 d-flex justify-content-center align-items-center flex-column' style={containerStyle}>
      <Card className='mb-3'>
        <CardBody>
          <CardTitle tag="h1">Front-end Development</CardTitle>
          <CardText style={{ fontSize: '15px' }}>
            Specializing in modern front-end technologies, I can help bring your vision to life with a responsive and interactive website.
          </CardText>
        </CardBody>
      </Card>
      <Card className='mb-3' style={{ width: '80%'}}>
        <CardBody>
          <CardTitle tag="h1">Custom UI Design</CardTitle>
          <CardText style={{ fontSize: '15px',}}>
            I provide custom UI design services tailored to your needs.
            From conceptualizing to final implementation, I aim to create user-friendly designs that not only look good but also enhance user experience.
          </CardText>
        </CardBody>
      </Card>
      <Card className='mb-3'>
        <CardBody>
          <CardTitle tag="h1">Responsive Design</CardTitle>
          <CardText style={{ fontSize: '15px' }}>
            With a mobile-first approach, I ensure that your website looks great and functions flawlessly across all devices, be it desktop, tablet, or mobile.
          </CardText>
        </CardBody>
      </Card>
      </Container>
    </div>
  );
};

export default ServicesPage;
