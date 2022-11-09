import React, { useEffect } from "react";
import './aboutUs.css';
import AOS from "aos";
import "aos/dist/aos.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className='about-inner'>
      <h1 className='about-title'>
        About us
      </h1>
      <div className="about-container" 
        data-aos="fade-up" 
        data-aos-offset="200" 
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" >
        <Container>
          <Row>
            <Col sm={4} className='about-section-1'>
              <h2 className='about-h2'>Optimal Architectural	technology</h2>
              <div className="textSpace"></div>
              <span>
                건축물은 구조, 설계, 시공, 환경, 유지관리 등의 기술의 집합체 입니다.NP corp은 고객의 니즈를 파악하여 ‘최적의 기술 솔루션’을 제공합니다.
              </span>
              <div className="textSpace"></div>
              <span>
                우리는 최고의 연구 및 설계 엔지니어와 다양한 특허 기술로 신축 또는기존 건축물의 가장 적합한 기술을 제안하고 
                시공 및 유지관리가 될 수 있도록 건축물의 현실(시공)과 이상(설계)의 차이(Lisk)을 줄여드릴 수 있는 파트너사입니다.
              </span>
            </Col>
            <Col sm={8} className='about-section-21'>
              <img src='/images/about_image_4.png' alt='사진' height={600} width={700}></img>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-contatiner"
        data-aos="fade-up" 
        data-aos-offset="200" 
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" >
        <Container>
          <Row>
            <Col sm={8} className='about-section-22'>
              <img src='/images/about_image_3.png' alt='사진' height={600} width={700}></img>
            </Col>
            <Col sm={4} className='about-section-1'>
              <h2 className='about-h2'>What is RSE?</h2>
              <div className="textSpace"></div>
              <span>RSE는 Reliability Structural Engineering의 약자로 건축물의 구조적으로 가장 신뢰할 수 있는 솔루션을 제공합니다.</span>
              <div className="textSpace"></div>
              <span>기존 건축물의 현재 상태에서 구조, 에너지, 현황 등의 현실적인 문제점을 파악하고 기업은 안전성, 시공성, 경제성, 유지성을고려하여 최적의 솔루션을 제공해야 합니다.</span><br/>
              <div className="textSpace"></div>
              <span>NP(늘품)는 센서 측정 및 상시모니터링, 3D 스캐닝, 안전진단, 정밀안전진단을 통하여 기존 건축물의 현황을 데이터적으로분석하고 건축물의 특징에 맞는 최적의 솔루션을 제공하여 건축물에 안전성 개선과 경제성 개선을 통하여 새 생명을 지원합니다.</span><br/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-contatiner"
        data-aos="fade-up" 
              data-aos-offset="200" 
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" >
        <Container>
          <Row>
            <Col sm={4} className='about-section-1'>
              <h2 className='about-h2'>What is DTA?</h2>
              <div className="textSpace"></div>
              <span>DTA는 Digital Transformation Architecture의 약자로 건축물을 디지털 정보로 변환하는 솔루션을 제공합니다. </span>
              <div className="textSpace"></div>
              <span>건축물의 설계, 시공, 감리, 철거 등의 과정에서 현장과 설계안과의 괴리로 인하여 많은 어려움을 겪고있으며, 기업은 현실과 설계안과의 격차를 줄이기 위하여 가능한 많은 건축물의 정보를 데이터 적으로 제공하여야 합니다.</span>
              <div className="textSpace"></div>
              <span>NP(늘품)는 ArchiCAD 기반의 건축설계, 구조설계, 에너지성능, 물량산출, 시공, 철거 등 공정별 3D BIM Model과Twinmotion을 제공하여 명확하게 설계자의 정보를 시공사와 감리사에게 전달하고 현실적인 건축물 시공과 명확한감리가 될 수 있도록 지원합니다.</span>
              
            </Col>
            <Col sm={8} className='about-section-23'>
              <img src='/images/about_image_2.png' alt='사진' height={600} width={700}></img>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default AboutUs
