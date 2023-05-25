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
              className="d-flex  mt-5"
              style={{ justifyContent: 'center' }}
            >
              <Card
                className="d-flex boxstyle rounded-4"
                style={{
                  width: '60%',
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
            <h1>bibendum </h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, sapien vel bibendum bibendum, velit sapien luctus velit,
              vel bibendum sapien sapien vel sapien. Sed euismod, sapien vel
              bibendum bibendum, velit sapien luctus velit, vel bibendum sapien
              sapien vel sapien. Sed euismod
            </h3>
          </Col>
          <Col sm="6">
            <Card>
              <CardHeader className="text-white bg-secondary">
                <h1>Lorem ipsum dolor sit amet</h1>
              </CardHeader>
              <CardBody>
                <dl className="row">
                  <dt className="col-6">Lorem</dt>
                  <dd className="col-6">ipsum</dd>
                  <dt className="col-6">dolor</dt>
                  <dd className="col-6">amet</dd>
                  <dt className="col-6">sit</dt>
                  <dd className="col-6">adipiscing</dd>
                  <dt className="col-6">euismod</dt>
                  <dd className="col-6">sapien</dd>
                </dl>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <blockquote className="blockquote">
                  <p>
                    sapien vel bibendum bibendum, velit sapien luctus velit, vel
                    bibendum sapien sapien vel sapien. Sed euismod, sapien
                  </p>
                  <footer className="blockquote-footer">
                    bibendum bibendum,{' '}
                    <cite title="Source Title">
                      sapien vel bibendum bibendum, velit sapien luctus velit,
                      vel bibendum sapien sapien vel sapien. Sed euismod, sapien
                    </cite>
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <h1>bibendum</h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
