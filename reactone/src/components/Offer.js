import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'
import img16 from '../assets/img/offer2.jpg'

 class Offer extends Component {
    render() {
        return (
            <div>
    <section id="aa-banner">
    <div className="container">
      <div className="row">
        <div className="col-md-12">        
          <div className="row">
            <div className="aa-banner-area">
            <a href="#">
            <img src={img16} style={{width:"100%"}} alt="fashion banner img"/></a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
            </div>
        )
    }
}
export default Offer