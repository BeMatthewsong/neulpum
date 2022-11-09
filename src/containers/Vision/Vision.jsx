import React from 'react'
import './vision.css'

const Vision = () => {
  return (
    <div className='vision-container'>
      <div className="vision-inner" >
        <h1 className='vision-title'>Mision & Vision</h1>
        <div className="vision-image" 
          data-aos="fade-up" 
          data-aos-offset="200" 
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img src='/images/vision_image_1.png' alt='사진' height={500} width={1080}></img>
        </div>
      </div>
    </div>
  )
}

export default Vision