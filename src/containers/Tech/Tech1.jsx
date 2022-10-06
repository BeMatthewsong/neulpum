import React from 'react'
import './tech1.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Tech1() {
  return (
    <Container>
      <div>
        <Row>
          <Col sm={8}>
            <Image src="https://cdn.pixabay.com/photo/2016/10/12/23/23/mining-excavator-1736293_960_720.jpg" rounded />
          </Col>
          <Col sm={4}>sm=4</Col>
        </Row>
      </div>
    </Container>
  );
}

export default Tech1;