import React from 'react'
import "./section3.css"
function Section2() {
  return (
    <div className='section3'>
      <div className="section3_box">
        <div className="section3_box1">
          <div className="section3_text">Specialities</div>
          <button className="section3_btn">show all</button>
        </div>
        <div className="section3_box2">
          <div className="box"><div className="box_icon"><img src="./Section3_img/1.png" alt="" /></div>
            <div className="box_text">Bagel</div>
          </div>
          <div className="box"><div className="box_icon"><img src="./Section3_img/burger.png" alt="" /></div>
            <div className="box_text">Burger</div>
          </div>
          <div className="box"><div className="box_icon"><img src="./Section3_img/chicken.png" alt="" /></div>
            <div className="box_text">Chicken</div>
          </div>
          <div className="box"><div className="box_icon"><img src="./Section3_img/fish.png" alt="" /></div>
            <div className="box_text">Fish</div>
          </div>
          <div className="box"><div className="box_icon"><img src="./Section3_img/fishnchips.png" alt="" /></div>
            <div className="box_text">Fish’Chips</div>
          </div>
          <div className="box"><div className="box_icon"><img src="./Section3_img/vegan.png" alt="" /></div>
            <div className="box_text">Salads</div>
          </div>
          <div className="box"><div className="box_icon"><img src="./Section3_img/pizza.png" alt="" /></div>
            <div className="box_text">Pizza</div>
          </div>
          <div className="box"><div className="box_icon"><img src="./Section3_img/raviolli.png" alt="" /></div>
            <div className="box_text">Pasta</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
