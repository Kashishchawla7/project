import React, { Component } from 'react'
import '../assets/css/bootstrap.css'
import '../assets/css/style.css'
import {Link} from 'react-router-dom'
import img1 from '../assets/img/flag/english.jpg'
import img2 from '../assets/img/flag/french.jpg'
import img3 from '../assets/img/flag/english.jpg'
import Support from './support'
//import img4 from '../assets/img/woman-small-2.jpg'
//import img5 from '../assets/img/woman-small-1.jpg'
class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  logout = (event) =>{
    localStorage.removeItem("email")
  }
  
    render() {
        return (
            <div>
    <header id="aa-header">
    {/* <!-- start header top  --> */}
    <div className="aa-header-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-header-top-area">
              {/* <!-- start header top left --> */}
              <div className="aa-header-top-left">
                {/* <!-- start language --> */}
                <div className="aa-language">
                  <div className="dropdown">
                    <a className="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                   
                      <img src={img1} alt="english flag" />ENGLISH
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <li><a href="#"><img src={img2} alt="" />FRENCH</a></li>
                      <li><a href="#"><img src={img3} alt="" />ENGLISH</a></li>
                    </ul>
                  </div>
                </div>
                {/* <!-- / language --> */}

                {/* <!-- start currency --> */}
                <div className="aa-currency">
                  <div className="dropdown">
                    <a className="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <i className="fa fa-usd"></i>USD
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <li><a href="#"><i className="fa fa-euro"></i>EURO</a></li>
                      <li><a href="#"><i className="fa fa-jpy"></i>YEN</a></li>
                    </ul>
                  </div>
                </div>
                {/* <!-- / currency --> */}
                {/* <!-- start cellphone --> */}
                <div className="cellphone hidden-xs">
                  <p><span className="fa fa-phone"></span>00-62-658-658</p>
                </div>
                {/* <!-- / cellphone --> */}
              </div>
              {/* <!-- / header top left --> */}
              <div className="aa-header-top-right">
                <ul className="aa-head-top-nav-right">
                  <li><Link to="/myaccount">My Account</Link></li>
                  <li className="hidden-xs"><a href="wishlist">Wishlist</a></li>
                  <li className="hidden-xs"><a href="displaycart">My Cart</a></li>
                  <li className="hidden-xs"><a href="checkout">Checkout</a></li>
                  <li><Link to="/login" data-toggle="modal" data-target="#login-modal">Login</Link></li>
                  <li><Link to="/" data-toggle="modal" onClick={this.logout} >Logout</Link></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- / header top  --> */}

    {/* <!-- start header bottom  --> */}
    <div className="aa-header-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-header-bottom-area">
              {/* <!-- logo  --> */}
              <div className="aa-logo">
                {/* <!-- Text based logo --> */}
                <Link to ="/">
                  <span className="fa fa-shopping-cart"></span>
                  <p>Digital <strong>Mart</strong> <span>Your Shopping Partner</span></p>
                </Link>
                {/* <!-- img based logo --> */}
                {/* <!-- <a href="index.html"><img src="img/logo.jpg" alt="logo img"></a> --> */}
              </div>
              {/* <!-- / logo  --> */}
               {/* <!-- cart box --> */}
              <div className="aa-cartbox">
                <a className="aa-cart-link" href="displaycart">
                  <span className="fa fa-shopping-basket"></span>
                  <span className="aa-cart-title">SHOPPING CART</span>
                  <span className="aa-cart-notify"></span>
                </a>
                {/* <div className="aa-cartbox-summary">
                  <ul>
                    <li>
                      <a className="aa-cartbox-img" href="#"><img src={img4} alt="img" /></a>
                      <div className="aa-cartbox-info">
                        <h4><a href="#">Product Name</a></h4>
                        <p>1 x $250</p>
                      </div>
                      <a className="aa-remove-product" href="#"><span className="fa fa-times"></span></a>
                    </li>
                    <li>
                      <a className="aa-cartbox-img" href="#"><img src={img5} alt="img"/></a>
                      <div className="aa-cartbox-info">
                        <h4><a href="#">Product Name</a></h4>
                        <p>1 x $250</p>
                      </div>
                      <a className="aa-remove-product" href="#"><span className="fa fa-times"></span></a>
                    </li>                    
                    <li>
                      <span className="aa-cartbox-total-title">
                        Total
                      </span>
                      <span className="aa-cartbox-total-price">
                        $500
                      </span>
                    </li>
                  </ul>
                  <a className="aa-cartbox-checkout aa-primary-btn" href="checkout.html">Checkout</a>
                </div> */}
              </div>
              {/* <!-- / cart box --> */}
              {/* <!-- search box --> */}
              <div className="aa-search-box">
                <form action="">
                  <input type="text" name="" id="" placeholder="Search here ex. 'mobile' " />
                  <button type="submit"><span className="fa fa-search"></span></button>
                </form>
              </div>
              {/* <!-- / search box -->              */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- / header bottom  --> */}
  </header>
  
            </div>
        )
    }
}
export default Header
