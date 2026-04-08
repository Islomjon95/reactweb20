import React from 'react'
import "./section2.css"
function Section2() {
    return (
        <div className='section2'>
            <div className="section2_box1">
                <div className="section2_text1">Your nearest restaurants</div>
                <div className="section2_text2">Each kitchen works with its own delivery area to deliver food to you as soon as possible</div>
            </div>
            <div className="section2_box2">
                <div class="section2_int">
                    <svg class="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <input type="text" placeholder="Enter delivery address" class="delivery-input" />
                    
                </div>
                <button className='section2_btn'>send</button>
            </div>
        </div>
    )
}

export default Section2
