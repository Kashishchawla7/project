import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'
import '../assets/css/font-awesome.css'
import '../assets/css/jquery.simpleLens.css'
import '../assets/css/nouislider.css'
import '../assets/css/jquery.smartmenus.bootstrap.css'
import '../assets/css/slick.css'
import '../assets/css/sequence-theme.modern-slide-in.css'

 class Menu extends Component {



    render() {
        return (
            <div>
    <section id="menu" style={{border:"solid",backgroundColor:"black"}}>
    <div className="container">
      <div className="menu-area">
        {/* <!-- Navbar --> */}
        <div className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>          
          </div>
          <div className="navbar-collapse collapse">
            {/* <!-- Left nav --> */}
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">
                <a href="#">Home</a>
                </Link>
                </li>
              <li>
              <Link  to="/products/101">
                Mobiles
                </Link></li>
              <li>
              <Link  to="/products/103">
                Laptop
                </Link></li>
              <li>
              <Link to="/products/102">
              Television
                </Link></li>
              <li>
              <Link to="/products/105">
                Watches
                </Link></li>
              <li>
              <Link to="/products/104">Camera
              </Link></li>

              <li>
              <Link to="/products/106">
                Smart devices
              </Link></li>

             
              
              <li>
              <Link to="/bestseller">
                Best Seller
                </Link></li>
                       
              <li>
                <Link to="/blog">
                Blog<span className="caret"></span>
                              
                </Link>
              </li>
              <li>
              <Link to="/contact">
                Contact
              </Link>
                </li>

              <li>
              <Link to="/contact">
                Customer Service <span className="caret"></span>
                </Link>
              </li>
            </ul>
          </div>
          {/* <!--/.nav-collapse --> */}
        </div>
      </div>       
    </div>
  </section>
            </div>
        )
    }
}
export default Menu