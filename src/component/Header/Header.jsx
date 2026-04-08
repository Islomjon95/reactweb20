import React from 'react'
import "./header.css"
function Header() {
  return (
    <div className='header'>
      <div className="content_box">
        <p className="header_title">
          Your Food court at home
        </p>
        <div className="wrapper">
          <div className="wrapper_box">
            <p className="head_title">Delivery</p>
            <p className="wrap_text">Order in</p>
          </div>
          <div className="wrapper_box">
            <p className="head_title">Takeout</p>
            <p className="wrap_text">Grap and go</p>
          </div>
        </div>
      </div>
      <div className="img_box">
        <img src="./img/Photo.png" alt="" />

      </div>
      <div className="wrapper2">
        <div className="wrapper2_box1">
          <div className="wrapper2_img"><img src="./header_wrapper_img/time-eat.png" alt="" /></div>
          <div className="wrapper2_text1 text">delivery in all paris in less than 30 minutes</div>
        </div>
        <div className="wrapper2_box2">
          <div className="wrapper2_img"><img src="./header_wrapper_img/delivery.png" alt="" /></div>
          <div className="wrapper2_text2 text">Free delivery from 29 euros</div>
        </div>
        <div className="wrapper2_box3">
          <div className="wrapper2_img"><img src="./header_wrapper_img/paris.png" alt="" /></div>
          <div className="wrapper2_text3 text">Only fresh and French products</div>
        </div>
      </div>
    </div>
  )
}

export default Header
