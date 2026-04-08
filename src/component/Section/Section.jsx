import React from 'react'
import "./section.css"


function Navbar2() {
  return (
    <div className='section'>
      <div className="section_box1">
        <div className="box1_text">Restaurants</div>
        <button className="box1btn">show all</button>
      </div>
      <div className="section_box2">
        <div className="section_box2_box">
          <div className="section_img"><img src="./section_img/1.jpg" alt="" /></div>
          <div className="section_text">
            <div className="text1">
              <img src="./section_img/Union.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section_box2_box">
          <div className="section_img"><img src="./section_img/2.jpg" alt="" /></div>
          <div className="section_text">
            <div className="text2">
              <img src="./section_img/Union1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section_box2_box">
          <div className="section_img"><img src="./section_img/3.jpg" alt="" /></div>
          <div className="section_text">
            <div className="text3">
              <img src="./section_img/Union2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section_box2_box">
          <div className="section_img"><img src="./section_img/4.jpg" alt="" /></div>
          <div className="section_text">
            <div className="text4">
              <img src="./section_img/union3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar2
