import React, { useEffect } from "react";
import './video.css';
import AOS from "aos";
import "aos/dist/aos.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Video = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="video-container">
      <div className="video-inner">
        <Container>
          <Row>
            <Col sm={7}>
              <div className="video-section">
                <iframe 
                  width="100%" height="100%" 
                  src="https://www.youtube.com/embed/KPvxLY6V7Ag?controls=0" 
                  title="YouTube video player" 
                  frameborder="1" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
            </Col>
            <Col sm={5}  
              data-aos="fade-up" 
              data-aos-offset="200" 
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000" 
            >
              <div className="video-textContainer">
                <h1 className='video-title'>Video</h1>
                <h3>레버형 TMD 제진시스템구조물 진동제어를 통한 내진성능보강 공법</h3>
                <span>건축물의 노후화 또는 용도 변경·대수선 시 구조 성능 및 내진 성능 보강이 필요할 시 GFRPU 공법은 경제적이고 신속하게 구조물의 성능을 개선하여 안전하게 만드는 기술입니다.</span>
                <h3>LTMD 시스템 진동제어 장치</h3>
                <span>· 특정층에 설치하는 TMD로 부터 층간변위를 구속조건으로 사용하여 동적응답을 제어하는 제진시스템· 구조물의 층간변위를 구속조건으로 기존 저층 구조물의 내진보강용으로 적용가능· 가새나 전단벽 등에 의한 보강은 추가적인 기초시공이 필요하지만 LTMD는 독립적인 기초시공이 불필요</span>
              </div>
            </Col>
          </Row>
          <div className="video-margin"></div>
        </Container>
      </div>
    </div>
    
  )
}

export default Video