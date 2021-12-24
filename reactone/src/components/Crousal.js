import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'
import '../assets/css/font-awesome.css'
import '../assets/css/jquery.simpleLens.css'
import '../assets/css/nouislider.css'
import '../assets/css/jquery.smartmenus.bootstrap.css'
import '../assets/css/slick.css'
import '../assets/css/sequence-theme.modern-slide-in.css'
// import '../assets/js/bootstrap.js'
// import '../assets/js/custom.js'
// import '../assets/js/jquery.simpleGallery.js'
// import '../assets/js/jquery.simpleLens.js'
// import '../assets/js/jquery.smartmenus.bootstrap.js'
// import '../assets/js/nouislider.js'
// import '../assets/js/sequence-theme.modern-slide-in'
// import '../assets/js/sequence.js'
// import '../assets/js/slick.js'
// import '../assets/js/jquery.smartmenus.js'









// import '../assets/css/plugins.css'
import'../assets/css/sequence-theme.modern-slide-in.css'
import img11 from '../assets/img/crousal1.jpg'
import img12 from '../assets/img/crousal2.jpg'
import img13 from '../assets/img/crousal3.1.jpg'
import img14 from '../assets/img/crousal4.jpg'
import img15 from '../assets/img/crousal5.jpg'


 class Crousal extends Component {
    render() {
        return (
            <div>
                <section id="aa-slider">
    <div className="aa-slider-area">
      <div id="sequence" className="seq">
        <div className="seq-screen">
          <ul className="seq-canvas">
            {/* <!-- single slide item --> */}
            <li>
              <div className="seq-model">
                <img data-seq src={img11} alt="tv img" />
              </div>
              <div className="seq-title">
               <span data-seq>Save Up to 25% Off</span>                
                <h2 data-seq>Exciting Deals on Televisions</h2>                
                <p data-seq>Shop upto 35,000 ang get 1 voucher free!!</p>
                <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
              </div>
            </li>
            {/* <!-- single slide item --> */}
            <li>
              <div className="seq-model">
                <img data-seq src={img12} alt="Wristwatch slide img" />
              </div>
              <div className="seq-title">
                <span data-seq>Save Up to 40% Off</span>                
                <h2 data-seq>Smart Watches New Collection!</h2>                
                <p data-seq></p>
                <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
              </div>
            </li>
            {/* <!-- single slide item --> */}
            <li>
              <div className="seq-model">
                <img data-seq src={img13} alt="Women Jeans slide img" />
              </div>
              <div className="seq-title">
                <span data-seq>Lowest Prices</span>                
                <h2 data-seq>Wide Range of Mobile Phones</h2>                
                <p data-seq>Big Billion Sale!</p>
                <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
              </div>
            </li>
            {/* <!-- single slide item -->            */}
            <li>
              <div className="seq-model">
                <img data-seq src={img14} alt="Shoes slide img" />
              </div>
              <div className="seq-title">
                <span data-seq>Save Up to 45% Off</span>                
                <h2 data-seq>Exclusive Laptops</h2>                
                <p data-seq>Free shipping .</p>
                <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
              </div>
            </li>
            {/* <!-- single slide item -->   */}
             <li>
              <div className="seq-model">
                <img data-seq src={img15} alt="Male Female slide img" />
              </div>
              <div className="seq-title">
                <span data-seq>Save Up to 50% Off</span>                
                <h2 data-seq>Best Collection</h2>                
                <p data-seq>Buy @2 get 1 free!</p>
                <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
              </div>
            </li>                   
          </ul>
        </div>
        {/* <!-- slider navigation btn --> */}
        <fieldset className="seq-nav" aria-controls="sequence" aria-label="Slider buttons">
          <a type="button" className="seq-prev" aria-label="Previous"><span className="fa fa-angle-left"></span></a>
          <a type="button" className="seq-next" aria-label="Next"><span className="fa fa-angle-right"></span></a>
        </fieldset>
      </div>
    </div>
  </section>
            </div>
        )
    }
}
export default Crousal