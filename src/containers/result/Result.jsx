import React from 'react';
import './result.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

          

function Result() {
  return (
    <div className='resultPage'>
      <Container>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/10/12/23/23/mining-excavator-1736293_960_720.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/10/12/23/23/mining-excavator-1736293_960_720.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/10/12/23/23/mining-excavator-1736293_960_720.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/10/12/23/23/mining-excavator-1736293_960_720.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/10/12/23/23/mining-excavator-1736293_960_720.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/10/12/23/23/mining-excavator-1736293_960_720.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Result;