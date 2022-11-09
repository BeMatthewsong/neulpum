import React from 'react'
import './company.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavBar from '../navBar/NavBar';

const Company = () => {
  return (
    <>
      <NavBar/>
      <div className="company-container">
        <div className="company-inner">
          <div className="company-aboutAs">
            <Container>
              <Row>
                <Col sm={5} className='company-imageContainer'>
                  <img src="/images/company_aboutUs_image_1.png" alt="About Us" height={160} width={400} />
                </Col>
                <Col sm={7}>
                  <div className="company-textContainer">
                    <h1 className='company-title'>About us</h1>
                    <h3>늘품은 <span>‘항상 성장할 가능성을 품다’</span>의 순우리말로 혁신과 도전을 지향합니다.</h3>
                    <p>건축물은 구조, 설계, 시공, 환경, 유지관리 등의 기술의 집합체로 가장 적합한 기술과 설계가 필요합니다. NP corp은 고객의 니즈를 파악하여 ‘최적의 기술 솔루션’을 제공합니다. 우리는 최고의 연구 및 설계 엔지니어와 다양한 특허 기술로 건축물의 가장 적합한 기술을 개발하고 있으며, RSE (Reliability Structural Engineering) & DTA (Digital Transformation Architecture) 엔지니어링 솔루션를 통한 건축물 데이터(설계, 시공, 유지관리)를 이용하여 현실(시공)과 이상(설계)의 차이(Lisk)를 줄여드리겠습니다.</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="company-coreValue">
            <div>
              <div className="company-textbox">
                <h1 className='company-title'>Core Value</h1>
                <p>늘품은 고객에게 최적의 솔루션 제공을 목표로 합니다경제성, 시공성, 안전성을 고려하여 고객에게 가장 적합한 건축 기술 및 데이터를 제공합니다.</p>
              </div>
              <Container>
                <Row>
                  <Col><img src='/images/company_coreValue_image_1.png' alt='사진' height={200} width={150}></img></Col>
                  <Col><img src='/images/company_coreValue_image_2.png' alt='사진' height={200} width={150}></img></Col>
                  <Col><img src='/images/company_coreValue_image_3.png' alt='사진' height={200} width={150}></img></Col>
                  <Col><img src='/images/company_coreValue_image_4.png' alt='사진' height={200} width={150}></img></Col>
                  <Col><img src='/images/company_coreValue_image_5.png' alt='사진' height={200} width={150}></img></Col>
                  <Col><img src='/images/company_coreValue_image_6.png' alt='사진' height={200} width={150}></img></Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="company-partner">
            <h1 className='company-title'>Partners</h1>
            <p>늘품내진이앤씨는 다양한 산업의 파트너들과 함께하고 있습니다.</p>
            <div className="partner-space"></div>
            <Container>
                <Row>
                  <Col sm={3}>
                    <div className="parter-img" style={{ backgroundImage: "url(/images/corp_1.png)" }}></div>
                  </Col>
                  <Col sm={3}>
                    <div className="parter-img" style={{ backgroundImage: "url(/images/corp_2.png)" }}></div>
                  </Col>
                  <Col sm={3}>
                    <div className="parter-img" style={{ backgroundImage: "url(/images/corp_3.png)" }}></div>
                  </Col>
                  <Col sm={3}>
                    <div className="parter-img" style={{ backgroundImage: "url(/images/corp_4.png)" }}></div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={3}>
                    <div className="parter-img" style={{ backgroundImage: "url(/images/corp_5.png)" }}></div>
                  </Col>
                  <Col sm={3}>
                    <div className="parter-img" style={{ backgroundImage: "url(/images/corp_6.png)" }}></div>
                  </Col>
                  <Col sm={3}>
                    <div className="parter-img" style={{ backgroundImage: "url(/images/corp_10.png)" }}></div>
                  </Col>
                  <Col sm={3}>
                    <div className="parter-img" style={{ backgroundImage: "url(/images/corp_8.png)" }}></div>
                  </Col>
                </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  )
}

export default Company