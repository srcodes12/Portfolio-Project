import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";


const AboutPage = () => {
  return (
<>

    <Container className="rounded-4"  style={{ backgroundColor: '#f0f0f0', justifyContent: "end", marginRight: '5vw', marginLeft: '30vh', marginTop: '10vh', maxWidth: '80%',}} >
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
};

export default AboutPage;