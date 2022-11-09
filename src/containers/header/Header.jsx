import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className="header-overlay">
      <div className='header-cotainer'>
        <div className="header-inner">
        {/* style={{ backgroundImage: "url(/images/header_image_1.png)"}} */}
          <div className="header-textbox">
            <h1 className='header-title' >Neulpum</h1>
            <h4 className='heaer-description'>
              늘품은 ‘항상 성장할 가능성을 품다’의 순우리말로 혁신과 도전을 지향합니다.
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header