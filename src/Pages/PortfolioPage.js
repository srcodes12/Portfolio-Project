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
} from 'reactstrap'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ws1 from '../assets/images/website1.png'
import '../componets/boxstyle.css' 

const PortfolioPage = () => {
  return (
    <>
      <Container></Container>
      <CardGroup className="mt-5 rounded-5 ">
        <Card className="m-2 rounded-5 boxstyle">
          <CardImg alt="Graphics Portfolio" src={ws1} top width="100%" className='rounded-5'/>
          <CardBody>
            <CardTitle tag="h2">IPFS Graphics Portfolio</CardTitle>
            <hr></hr>
            <CardText tag="h4">
              This is my graphic portfolio, using adobe photoshop, illistrator,
              after effects, and cinema 4d. This website is also designed and
              build by me, in the use case of a link tree!
            </CardText>
            <Button target="blank" style={{fontSize: 18, padding: 6 }} className='rounded-4' href="https://xux.eth.limo/">
              Launch
            </Button>
          </CardBody>
        </Card>
        <Card className="m-2 rounded-5 boxstyle">
          <CardImg
          className='rounded-5'
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h2">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h3">
              Card subtitle
            </CardSubtitle>
            <CardText tag="h4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button href="xux.eth.limo">Launch</Button>
          </CardBody>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="m-2 rounded-5 boxstyle">
          <CardImg
          className='rounded-5'
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h2">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h3">
              Card subtitle
            </CardSubtitle>
            <CardText tag="h4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card className="m-2 rounded-5 boxstyle">
          <CardImg
            className='rounded-5'
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h2">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h3">
              Card subtitle
            </CardSubtitle>
            <CardText tag="h4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  )
}

export default PortfolioPage
