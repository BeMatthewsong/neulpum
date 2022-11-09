import React, { useEffect } from "react";
import './tech1.css';
import AOS from "aos";
import "aos/dist/aos.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tech1() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className='tech-inner'>
      <h1 className='tech-title'>Technology</h1>
      <Container
        data-aos="fade-up" 
        data-aos-offset="200" 
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Row>
          <Col>
            <div className="tech-container">
              <div className="tech-imageBox" style={{ backgroundImage: "url(/images/tech_image_1.png)" }}>
              </div>
              <div className="tech-textbox">
                <h4>Remodeling</h4>
              </div>
            </div>
          </Col>
          <Col>
            <div className="tech-container">
              <div className="tech-imageBox" style={{ backgroundImage: "url(/images/tech_image_2.png)" }}>
              </div>
              <div className="tech-textbox">
                <h4>Retroit</h4>
              </div>
            </div>
          </Col>
          <Col>
            <div className="tech-container">
              <div className="tech-imageBox" style={{ backgroundImage: "url(/images/tech_image_3.png)" }}>
              </div>
              <div className="tech-textbox">
                <h4>Seismic</h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="tech-container">
              <div className="tech-imageBox" style={{ backgroundImage: "url(/images/tech_image_4.png)" }}>
              </div>
              <div className="tech-textbox">
                <h4>Feasibility Analysis</h4>
              </div>
            </div>
          </Col>
          <Col>
            <div className="tech-container">
              <div className="tech-imageBox" style={{ backgroundImage: "url(/images/tech_image_5.png)" }}>
              </div>
              <div className="tech-textbox">
                <h4>Safety diagnosis</h4>
              </div>
            </div>
          </Col>
          <Col>
            <div className="tech-container">
              <div className="tech-imageBox" style={{ backgroundImage: "url(/images/tech_image_6.png)" }}>
              </div>
              <div className="tech-textbox">
                <h4>SHM</h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="tech-container">
              <div className="tech-imageBox" style={{ backgroundImage: "url(/images/tech_image_7.png)" }}>
              </div>
              <div className="tech-textbox">
                <h4>3D Scanning</h4>
              </div>
            </div>
          </Col>
          <Col>
            <div className="tech-container">
              <div className="tech-imageBox" style={{ backgroundImage: "url(/images/tech_image_8.png)" }}>
              </div>
              <div className="tech-textbox">
                <h4>BIM Modeling</h4>
              </div>
            </div>
          </Col>
          <Col>
            <div className="tech-container">
              <div className="tech-imageBox" style={{ backgroundImage: "url(/images/tech_image_9.png)" }}>
              </div>
              <div className="tech-textbox">
                <h4>BIM APK 개발</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tech1;