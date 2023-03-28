import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import AnimatedDisplay from './AnimatedDisplay';

const Display = () => {
  const items = useSelector((state) =>
                  [(state),
                  (state),
                  (state)
  ]);

  console.log('display items', items);

  return (
    <Row>
      {items.map((item, index) => {
        return (
          item && ( 
              <Col md ClassName='m-1' key={index}>
                <AnimatedDisplay item={item} />
              </Col>
          )
        )
      })}
    </Row>
  )
};

export default Display;