import SubHeader from '../componets/Header/SubHeader';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  Button,
  CardImgOverlay,
  CardTitle,
  CardGroup,
  CardText,
  ListGroup,
  ListGroupItem,
  Textarea,
} from 'reactstrap'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ws1 from '../assets/images/website1.png'
import '../componets/boxstyle.css' 


const ContactPage = () => {
  return (
    <Container>
    <CardGroup className="mt-5 rounded-5 ">
    <Card className="m-2 rounded-5 boxstyle">
    <CardBody>
      <CardTitle tag="h2" className='justify-content-center d-flex'>Lets get in touch!</CardTitle>
      <hr></hr>
        <CardText>
          
        </CardText>
      <ListGroup tag="h4">
      <ListGroupItem>Mobile Number: (505)785-1719</ListGroupItem>
      <ListGroupItem>Email: stephenrogerszk@gmail.com</ListGroupItem>
      <ListGroupItem></ListGroupItem>
    </ListGroup>
    </CardBody>
  </Card>
  </CardGroup>
  </Container>
);
};

<Container>
<CardGroup className="mt-5 rounded-5 ">
  <Card className="m-2 rounded-5 boxstyle">
    <CardImg alt="Graphics Portfolio" src={ws1} top width="100%" className='rounded-5'/>
    <CardBody>
      <CardTitle tag="h2">Graphics Portfolio - Website</CardTitle>
      <hr></hr>
      <CardText tag="h4">
        This is my graphic portfolio, using adobe photoshop, illistrator,
        after effects, and cinema 4d. This website is also designed and
        build by me, in the use case of a link tree!
      </CardText>
      <Button target="blank" href="https://www.example.com">
        <h3>Launch</h3>
      </Button>
    </CardBody>
  </Card>
  </CardGroup>
  </Container>


export default ContactPage;