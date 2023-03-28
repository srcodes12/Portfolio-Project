import { Container,
        Card,
        CardImg,
        CardBody,
        CardSubtitle,
        Button,
        CardTitle,
        CardGroup,
        CardText,} from 'reactstrap';
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
    <Card className='m-2'>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
        
      />
      <CardBody>
        <CardTitle tag="h2">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h3"
        >
          Card subtitle
        </CardSubtitle>
        <CardText tag='h4'>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </CardText>
        <Button>
          Button
        </Button>
      </CardBody>
    </Card>
    
    <Card className='m-2'>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
        
      />
      <CardBody>
        <CardTitle tag="h2">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h3"
        >
          Card subtitle
        </CardSubtitle>
        <CardText tag='h4'>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </CardText>
        <Button>
          Button
        </Button>
      </CardBody>
    </Card>
  </CardGroup>
  </>
    );
  }
export default HomePage;
