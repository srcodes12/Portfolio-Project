import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";


const AboutPage = () => {
  return (
    <Container style={{ backgroundColor: '#f0f0f0', justifyContent: "center" }}>
        <Row className='row-content'>
          <Col sm='6'>
            <h1>bibendum </h1>
              <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien luctus velit, vel bibendum sapien sapien vel sapien. Sed euismod, sapien vel bibendum bibendum, velit sapien luctus velit, vel bibendum sapien sapien vel sapien. Sed euismod
              </h3>
          </Col>
          <Col sm='6'>
            <Card>
              <CardHeader className='bg-primary text-white'>
                  <h1>Lorem ipsum dolor sit amet</h1>
              </CardHeader>
              <CardBody>
              <dl className='row'>
                                <dt className='col-6'>Lorem</dt>
                                <dd className='col-6'>ipsum</dd>
                                <dt className='col-6'>dolor</dt>
                                <dd className='col-6'>amet</dd>
                                <dt className='col-6'>sit</dt>
                                <dd className='col-6'>adipiscing</dd>
                                <dt className='col-6'>euismod</dt>
                                <dd className='col-6'>sapien</dd>
                            </dl>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <blockquote className='blockquote'>
                  <p>
                  sapien vel bibendum bibendum, velit sapien luctus velit, vel bibendum sapien sapien vel sapien. Sed euismod, sapien
                  </p>
                  <footer className='blockquote-footer'>
                  bibendum bibendum,{' '}
                      <cite title='Source Title'>
                      sapien vel bibendum bibendum, velit sapien luctus velit, vel bibendum sapien sapien vel sapien. Sed euismod, sapien
                      </cite>
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            
            <h1>
            bibendum 
            </h1>
          </Col>
        </Row>
    </Container>
  )
};

export default AboutPage;