import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  Button,
  CardTitle,
  CardGroup,
  CardText,
  ListGroupItem,
  ListGroup,
} from 'reactstrap'
import SubHeader from '../componets/Header/SubHeader'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import img from '../assets/images/xuxwater.png'
import xux from '../assets/images/test3.png'
import im2 from '../assets/images/stat.png'
import './HomePageStyples.css'
import '../componets/boxstyle.css'
import fs from '../assets/images/fs.png'
import { useState } from 'react'

const HomePage = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      <Container className="d-flex  mt-5 " style={{ justifyContent: 'end' }}>
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
              Welcome!
            </CardTitle>
            <hr></hr>
            {isCollapsed ? (
            <CardText className='h3' style={{ width: '90%', alignItems: 'center' }}>{`Hello and welcome to my website! My name is Stephen and I'm a 23 year old software developer who is passionate about building with current technology to solve real world problems.`}</CardText>
          ) : (
            <CardText className='h3' style={{ width: '90%', alignItems: 'center' }}>{`Hello and welcome to my website! My name is Stephen and I'm a 23 year old software developer who is passionate about building with current technology to solve real world problems. I have a deep understanding of software development principles, best practices, and modern technologies, and I strive to create meaningful and impactful software solutions that not only meet the needs of clients and end users. Thank you for stopping by and please don't hesitate to reach out to me with any questions or inquiries.`}</CardText>
          )}
          <Button
                className='h4 rounded-3'
                onClick={toggleCollapse}
                style={{ fontSize: '1.5rem' }}
              >
                {isCollapsed ? 'Read More' : 'Read Less'}
          </Button>

          </CardBody>
        </Card>
      </Container>
    </>
  )
}
export default HomePage
