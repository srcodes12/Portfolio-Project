import {
  Container,
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  Col,
  Row,
  CardHeader,
} from 'reactstrap'
import './HomePageStyples.css'
import '../componets/boxstyle.css'
import { useState } from 'react'
import hs from '../assets/images/headshotimg.png'

const HomePage = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const styles = {
    collapsingContent: {
      transition: 'height 1s ease-in-out',
      overflow: 'hidden',
      height: isCollapsed ? '650px' : '1200px', 
    },
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Col>
          <img
            src={hs}
            className="d-flex  mt-5"
            style={{ marginLeft: '20vw', width: '20vw' }}
            alt="Stephen Rogers"
          />
        </Col>
        <Col>
          <div style={styles.collapsingContent}>
            <Container
              fluid
              className="d-flex  mt-5 "
              style={{ justifyContent: 'center' }}
            >
              <Card
                className="d-flex boxstyle rounded-4 col-lg-8"
                style={{
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
                    <CardText
                      className="h3"
                      style={{ width: '90%', alignItems: 'center' }}
                    >{`Hello and welcome to my website! My name is Stephen and I'm a 23 year old software developer who is passionate about building with current technology to solve real world problems.`}</CardText>
                  ) : (
                    <CardText
                      className="h3"
                      style={{ width: '90%', alignItems: 'center' }}
                    >{`Hello and welcome to my website! My name is Stephen and I'm a 23 year old software developer who is passionate about building with current technology to solve real world problems. I have a deep understanding of software development principles, best practices, and modern technologies, and I strive to create meaningful and impactful software solutions that not only meet the needs of clients and end users. Thank you for stopping by and please don't hesitate to reach out to me with any questions or inquiries.`}</CardText>
                  )}

                  <hr></hr>
                  <Button
                    className={`h4 rounded-3 ${
                      isCollapsed ? 'collapsed' : 'expanded'
                    }`}
                    onClick={toggleCollapse}
                    style={{ fontSize: '1.5rem' }}
                  >
                    {isCollapsed ? 'Read More' : 'Read Less'}
                  </Button>
                </CardBody>
              </Card>
            </Container>
          </div>
        </Col>
      </div>
      <Container
        className="rounded-4"
        style={{
          backgroundColor: '#f0f0f0',
          justifyContent: 'end',
          marginRight: '10vw',
          marginLeft: '19vw',
          marginTop: '10vh',
          maxWidth: '70%',
        }}
      >
        <Row className="justify-content-start align-items-center">
          <Col xs={12} md={6}>
            <h1>My Background</h1>
          </Col>
        </Row>
        <hr></hr>
        <Row className="row-content">
          <Col sm="6">
            <h1>About Me </h1>
            <h3>
            As a committed front-end software developer, I've sharpened my skills in React.js,
             a widely-used JavaScript library, enabling me to build dynamic and interactive user 
             interfaces. I'm passionate about designing scalable websites that are not only visually
              appealing but also serve practical purposes, tackling the problems everyday people encounter.
               With my expertise and creativity, I turn complex issues into intuitive, user-friendly 
            digital solutions, making technology more accessible and beneficial for everyone.
            </h3>
          </Col>
          <Col sm="6">
            <Card>
              <CardHeader className="text-white bg-secondary">
                <h1>Skills and Expertise</h1>
              </CardHeader>
              <CardBody>
                <dl className="row">
                <dt className="col-6">React.js</dt>
          <dd className="col-6">Expert</dd>
          <dt className="col-6">JavaScript</dt>
          <dd className="col-6">Advanced</dd>
          <dt className="col-6">HTML/CSS</dt>
          <dd className="col-6">Advanced</dd>
          <dt className="col-6">UI/UX Design</dt>
          <dd className="col-6">Intermediate</dd>
                </dl>
              </CardBody>
            </Card>
          </Col>
          <Col>
    <Card>
      <CardBody>
        <blockquote className="blockquote">
          <p>
            "In the world of software development, the ability to create effective and scalable solutions is a form of art. It's about understanding the needs of users and translating those needs into a digital reality."
          </p>
          <footer className="blockquote-footer">
            My Philosophy,{' '}
            <cite title="Source Title">
              "I strive to make technology more accessible and beneficial for everyone through my work."
            </cite>
          </footer>
        </blockquote>
      </CardBody>
    </Card>
  </Col>
</Row>

</Container>
</>
  )
}

export default HomePage
