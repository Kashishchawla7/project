import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'
import img30 from '../assets/img/l1.jpg'
import img31 from '../assets/img/l2.png'
import img32 from '../assets/img/l4.webp'
import img33 from '../assets/img/l3.jpg'
import img34 from '../assets/img/m1.png'
import img35 from '../assets/img/w1.jfif'
import img36 from '../assets/img/m3.jpg'
import img37 from '../assets/img/m4.jpg'
import img38 from '../assets/img/m5.jpg'
import img39 from '../assets/img/m2.jpg'
import img40 from '../assets/img/m6.jpg'





 class ClientBrand extends Component {
    render() {
        return (
            <div>
                 <section id="aa-client-brand">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="aa-client-brand-area">
            <ul class="aa-client-brand-slider">
              <li><a href="#"><img src={img30} alt="java img"/></a></li>
              <li><a href="#"><img src={img31} alt="jquery img"/></a></li>
              <li><a href="#"><img src={img32} alt="html5 img"/></a></li>
              <li><a href="#"><img src={img33} alt="css3 img"/></a></li>
              <li><a href="#"><img src={img34} alt="wordPress img"/></a></li>
              <li><a href="#"><img src={img35} alt="joomla img"/></a></li>
              <li><a href="#"><img src={img36} alt="java img"/></a></li>
              <li><a href="#"><img src={img37} alt="jquery img"/></a></li>
              <li><a href="#"><img src={img38} alt="html5 img"/></a></li>
              <li><a href="#"><img src={img39} alt="css3 img"/></a></li>
              {/* <li><a href="#"><img src={img40} alt="wordPress img"/></a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
            </div>
        )
    }
}
export default ClientBrand