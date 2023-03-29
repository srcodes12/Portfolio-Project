import { Container,
        Card,
        CardImg,
        CardBody,
        CardSubtitle,
        Button,
        CardTitle,
        CardGroup,
        CardText,
        ListGroupItem,
        ListGroup} from 'reactstrap';
import SubHeader from '../componets/Header/SubHeader';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import img from '../assets/images/xuxwater.png';
import xux from '../assets/images/test3.png';
import im2 from '../assets/images/stat.png';
import './HomePageStyples.css';
import '../componets/boxstyle.css' 
const HomePage = () => {
  return (
    <>
    <Container>

    </Container>
    <CardGroup className='mt-5'>
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
  </>
    );
  }
export default HomePage;
