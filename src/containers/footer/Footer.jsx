import React from 'react'
import './footer.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div className="footer-container">
      <Container className='footer-inner'>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <p className='footer-font'>Neulpum Corp Kangwon Hak-gil 1, 1103 (Hyoja-dong, bodeumgwan) business license number 398 - 87 - 01872</p>
            <p className='footer-font'>Representative number 033-242-9995/9996</p>
            <p className='footer-font'>E-mail songww1989@naver.com</p>
            <p className='footer-font'>Copyright @2022 Neulpum E.C. All rights reserved</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
