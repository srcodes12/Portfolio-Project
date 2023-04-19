import SubHeader from '../componets/Header/SubHeader';
import {
  Container,
  Card,
  CardImg,
  CardBody,
  Button,
  CardTitle,
  CardGroup,
  CardText,
  ListGroup,
  ListGroupItem,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ws1 from '../assets/images/website1.png'
import '../componets/boxstyle.css' 
import { useState } from 'react';


function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    comments: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Container>
    <CardGroup className="mt-5 rounded-5 ">
    <Card className="m-2 rounded-5 boxstyle">
    <CardBody>
      <CardTitle tag="h2" className='justify-content-center d-flex'>Lets get in touch!</CardTitle>
      <hr></hr>
      <Form onSubmit={handleSubmit} style={{ marginTop: '2rem', fontSize: '1.5rem' }}>
      <FormGroup row>
        <Label for="firstName" sm={3}>First Name <span className="text-danger">*</span></Label>
        <Col sm={9}>
          <Input type="text" name="firstName" id="firstName" required value={formData.firstName} onChange={handleChange} style={{ fontSize: '16px' }} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="lastName" sm={3}>Last Name <span className="text-danger">*</span></Label>
        <Col sm={9}>
          <Input type="text" name="lastName" id="lastName" required value={formData.lastName} onChange={handleChange} style={{ fontSize: '16px' }}  />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="companyName" sm={3}>Company Name</Label>
        <Col sm={9}>
          <Input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange} style={{ fontSize: '16px' }} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" sm={3}>Email <span className="text-danger">*</span></Label>
        <Col sm={9}>
          <Input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} style={{ fontSize: '16px' }} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="phone" sm={3}>Phone <span className="text-danger">*</span></Label>
        <Col sm={9}>
          <Input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} style={{ fontSize: '16px' }} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="comments" sm={3}>Comments</Label>
        <Col sm={9}>
          <Input type="textarea" name="comments" id="comments" value={formData.comments} onChange={handleChange} style={{ fontSize: '16px' }}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{ size: 9, offset: 3 }}>
          <Button size='lg' color="primary">Submit</Button>
        </Col>
      </FormGroup>
    </Form>
    </CardBody>
  </Card>
  </CardGroup>
  </Container>
);
};


export default ContactPage;