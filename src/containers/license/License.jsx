import React from 'react'
import './license.css';

import Carousel from 'react-bootstrap/Carousel';

function License() {
  return (
    <div className='license-container'>
      <h1 className='license-title'>License</h1>
      <div className="license-inner">
        <Carousel variant="dark">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="/images/license_1.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="/images/license_2.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/license_3.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/license_4.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default License;