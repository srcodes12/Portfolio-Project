import SubHeader from '../componets/Header/SubHeader';
import {
  Container,
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from 'reactstrap'
import ws1 from '../assets/images/website1.png'
import '../componets/boxstyle.css' 
import { useState } from 'react';
import pudgy from '../assets/images/pudgy.png'

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

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
    <Container className="d-flex mt-5" style={{ justifyContent: 'start', paddingLeft: '90px' }}>
          <Card
            className="d-flex boxstyle"
            style={{
              width: '30%',
              alignItems: 'center',
              fontFamily: 'Arial',
              padding: '20px',
            }}
          >
            <CardBody>
              <CardTitle tag="h1" className="justify-content-center d-flex">
              Want a estimate on a project?
              </CardTitle>
              <hr></hr>
                <CardText
                  className="h3"
                  style={{ width: '90%', alignItems: 'center' }}
                >{`Need some help on a project? Or maybe need someone to start-and-finish a website or project? Send me a message and lets build!`}
                </CardText>
            </CardBody>
            
          </Card>
        </Container>

    <Container className="d-flex  mt-5" style={{ justifyContent: 'end', marginRight: '30px' }}>
          <Card
            className="d-flex boxstyle"
            style={{
              width: '30%',
              alignItems: 'center',
              fontFamily: 'Arial',
              padding: '20px',
            }}
          >
            <CardBody>
              <CardTitle tag="h1" className="justify-content-center d-flex">
              All-in-One 
              </CardTitle>
              <hr></hr>
                <CardText
                  className="h3"
                  style={{ width: '90%', alignItems: 'center' }}
                >{`Need a nice package for all-in-one design and developed website? Contact me below!`}
                </CardText>
            </CardBody>
            
          </Card>
        </Container>
        <Container className="d-flex mt-5" style={{ justifyContent: 'start', paddingLeft: '90px' }}>
          <Card
            className="d-flex boxstyle"
            style={{
              width: '30%',
              alignItems: 'center',
              fontFamily: 'Arial',
              padding: '20px',
            }}
          >
            <CardBody>
              <CardTitle tag="h1" className="justify-content-center d-flex">
                Come say hi!
              </CardTitle>
              <hr></hr>
                <CardText
                  className="h3"
                  style={{ width: '90%', alignItems: 'center' }}
                >{`Wanna just say hi? Leave your info and we can talk code, production, new tech, and more!`}
                </CardText>
            </CardBody>
            
          </Card>
        </Container>
      
      

              


      <img src={pudgy} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, marginTop: '100px', opacity: '60%' }} alt="pudgypenguin" width='45%'/>
      <Button color="secondary" className='rounded-4' onClick={toggle} style={{marginTop: '25vh', marginLeft: '25vw',fontSize: 20, padding: 9 }}>Contact Me</Button>
      <Modal className='rounded-5' isOpen={modal} toggle={toggle} centered style={{ maxWidth: '80vw', width: '60%' }}>
        <ModalHeader toggle={toggle}><h1>Let's get in touch!</h1></ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="firstName"><h3>First Name</h3> <span className="text-danger">*</span></Label>
              <Input type="text" name="firstName" id="firstName" required value={formData.firstName} onChange={handleChange}style={{ fontSize: '18px' }} />
            </FormGroup>
            <FormGroup>
              <Label for="lastName"><h3>Last Name</h3> <span className="text-danger">*</span></Label>
              <Input type="text" name="lastName" id="lastName" required value={formData.lastName} onChange={handleChange} style={{ fontSize: '18px' }}/>
            </FormGroup>
            <FormGroup>
              <Label for="companyName"><h3>Company Name</h3></Label>
              <Input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange}style={{ fontSize: '18px' }} />
            </FormGroup>
            <FormGroup>
              <Label for="email"><h3>Email</h3> <span className="text-danger">*</span></Label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} style={{ fontSize: '18px' }}/>
            </FormGroup>
            <FormGroup>
              <Label for="phone"><h3>Phone Number</h3> <span className="text-danger">*</span></Label>
              <Input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}  style={{ fontSize: '18px' }} />
            </FormGroup>
            <FormGroup>
              <Label for="comments"><h3>Comments</h3></Label>
              <Input type="textarea" name="comments" id="comments" value={formData.comments} onChange={handleChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" style={{fontSize: 18, padding: 6 }} onClick={handleSubmit}>Submit</Button>{' '}
          <Button color="secondary" style={{fontSize: 18, padding: 6 }} onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}



export default ContactPage;