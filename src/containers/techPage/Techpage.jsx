import React, { useEffect } from "react";
import './techpage.css'
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from '../navBar/NavBar';

const Techpage = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <>
      <NavBar/>
      <div className="techpage-container">
        <div className="techpage-description">
          <h1 className='techpage-title'>Remodeling</h1>
          <div className="padding"></div>
          <h4>현재 건축물의 상태를 고려하여 리모델링 시 최적의 엔지니어링 솔루션을 제공합니다</h4>
          <p>리모델링 시 안전진단, 구조안전확인(구조, 내진), 에너지성능개선, 성능보강공사 등의생소한 엔지니어 적인 솔루션을 제공하여 건축물의 새 생명을 제공하고 있습니다</p>
        </div>
      </div>
      <div className="techpage-container">
        <img src="/images/techpage_image_1.png" alt="Remodeling1" height={150} width={900} />
        <div className="padding"></div>
        <div className="padding"></div>
        <img src="/images/techpage_image_2.png" alt="Remodeling2" height={300} width={900} />
      </div>
      <div className="techpage-container">
        <img src="/images/techpage_image_3.png" alt="Remodeling3" height={700} width={1200} />
        <div className="padding"></div>
      </div>
      <div className="techpage-container">
        <img src="/images/techpage_image_4.png" alt="Remodeling4" height={400} width={800} />
        <div className="padding"></div>
      </div>
      <div className="techpage-container-1"
          data-aos="fade-up" 
          data-aos-offset="200" 
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" >
          <div className="techpage-description">
        <div className="techpage-description">
          <h1 className='techpage-title'>Retrofit</h1>
          <div className="padding"></div>
          <h4>기존 건축물의 구조 및 내진성능 증진을 위한 스프레이형 GFRPU 공법</h4>
          <p>건축물의 노후화 또는 용도변경·대수선 시 구조성능 및 내진성능 보강이 필요할 시GFRPU 공법은 경제적이고 신속하게 구조물의 성능을 개선하여 안전하게 만드는 기술입니다.</p>
        </div>
          <div className="padding"></div>
          <img src="/images/techpage_image_6.png" alt="Remodeling5" height={200} width={900} />
          <div className="padding"></div>
          <div className="padding"></div>
          <img src="/images/techpage_image_9.png" alt="Remodeling6" height={400} width={900} />
        </div>
      </div>
        <div className="techpage-container"
          data-aos="fade-up" 
          data-aos-offset="200" 
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" >
          <div className="techpage-description">
            <h1 className='techpage-title'>Feasibility Analysis</h1>
            <div className="padding"></div>
            <h4>누구나 쉽게 투자하기 위한 사업 타당성 데이터 분석 솔루션입니다.</h4>
            <div className="padding"></div>
            <div className="padding"></div>
            <img src="/images/techpage_image_10.png" alt="Remodeling7" height={150} width={600} />
            <div className="padding"></div>
            <div className="padding"></div>
            <p>부동산에 대해 모르는 투자자여도 쉽게 투자할 수 있도록 다양한 종류의 데이터를 제공하고건축물에 생애주기 전반에 대한 투자비용을 확인하여 투자판단을 내릴 수 있습니다.</p>
          </div>
        </div>
        <div className="techpage-container-1" 
          data-aos="fade-up" 
          data-aos-offset="200" 
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" >
          <div className="techpage-description">
            <h1 className='techpage-title'>Safety Diagnosis</h1>
            <div className="padding"></div>
            <h4>건축물의 시작부터 끝까지 건축물 생애이력을 관리해드립니다.</h4>
            <div className="padding"></div>
            <img src="/images/techpage_image_11.png" alt="Remodeling7" height={150} width={600} />
            <div className="padding"></div>
            <p>늘품내진이앤씨는 안전진단 전문기관으로서  각종 진단업무를 수행합니다.건축물의 안전한 생애이력 늘품내진앤씨와 함께하세요.</p>
          </div>
        </div>
    </>
  )
}

export default Techpage