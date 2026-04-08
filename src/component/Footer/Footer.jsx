import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div>
      <footer class="footer">
  <div class="footer-container">
    <div class="footer-column logo-section">
      <div class="site-logo">
        <span class="yellow-text">yellow</span>kitchen
      </div>
      <hr class="footer-divider"/>
      <div class="app-buttons">
        <div class="app-placeholder"><img src="./Footer/1.png" alt="" /></div>
        <div class="app-placeholder"><img src="./Footer/2.png" alt="" /></div>
      </div>
    </div>

    <div class="footer-column">
      <h3>About us</h3>
      <ul>
        <li><a href="#">Concept</a></li>
        <li><a href="#">Franchise</a></li>
        <li><a href="#">Business</a></li>
        <li><a href="#">Restaurant signup</a></li>
        <li><a href="#">For Investors</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Get help</h3>
      <ul>
        <li><a href="#">Read FAQs</a></li>
        <li><a href="#">Restaurants</a></li>
        <li><a href="#">Specialities</a></li>
        <li><a href="#">Sign up to deliver</a></li>
        <li><a href="#">English <span>⌵</span></a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Contact us</h3>
      <p>Yellow kitchen Paris 11</p>
      <p>69 avenue de la Republique 75011 Paris</p>
      <p class="phone">0800 111 126</p>
      <p><a href="mailto:contact@yellowkitchens.com">contact@yellowkitchens.com</a></p>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="social-icons">
      <div class="icon-circle"><img src="./Footer/insta.svg" alt="" /></div>
      <div class="icon-circle"><img src="./Footer/twitter.png" alt="" /></div>
      <div class="icon-circle"><img src="./Footer/fb.svg" alt="" /></div>
    </div>
    <div class="legal-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms</a>
      <span>© 2020 Yellow kitchen</span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
