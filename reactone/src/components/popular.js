import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'
import img17 from '../assets/img/popular1.png'
import img18 from '../assets/img/popular2.png'
import img19 from '../assets/img/popular3.png'
import img20 from '../assets/img/popular4.png'
import img21 from '../assets/img/monitor.webp'
import img22 from '../assets/img/gaming.jpg'
import img23 from '../assets/img/realmepad.jpg'
import img24 from '../assets/img/asus.jpg'




class Popular extends Component {
    render() {
        return (
            <div>
                <section id="aa-popular-category">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="aa-popular-category-area">
              {/* <!-- start prduct navigation --> */}
             <ul className="nav nav-tabs aa-products-tab">
                <li className="active"><a href="#popular" data-toggle="tab">Popular</a></li>
                <li className="active"><a href="#bestseller" data-toggle="tab">Best Seller</a></li>
                                    
              </ul>
              {/* <!-- Tab panes --> */}
              <div className="tab-content">
                {/* <!-- Start men popular category --> */}
                <div className="tab-pane fade in active" id="popular">
                  <ul className="aa-product-catg aa-popular-slider">
                    {/* <!-- start single product item --> */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src={img17} alt="boat Airdrops" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">boAt Airdopes 421v2</a></h4>
                          <span className="aa-product-price">₹5,990.00</span><span className="aa-product-price"><del>₹1,999.00</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                      </div>
                      {/* <!-- product badge --> */}
                      <span className="aa-badge aa-sale" href="#">SALE!</span>
                    </li>
                     {/* <!-- start single product item --> */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src={img18} alt="smart watch"/></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                        <figcaption>
                          <h4 className="aa-product-title"><a href="#">boAt Xtend Smartwatch </a></h4>
                          <span className="aa-product-price">₹2,499.00</span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* <!-- product badge --> */}
                       <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                    </li>
                    {/* <!-- start single product item --> */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src={img19} alt="lenovo tab"/></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                      </figure>
                      <figcaption>
                        <h4 className="aa-product-title"><a href="#">Lenovo Tab M10 FHD Plus</a></h4>
                        <span className="aa-product-price">₹16,999.00</span>
                      </figcaption>
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* <!-- product badge --> */}
                       <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                    </li>
                    {/* <!-- start single product item --> */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src={img20} alt="polo shirt img"/></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Mi Notebook Pro</a></h4>
                          <span className="aa-product-price">₹56,990.00</span><span className="aa-product-price"><del>₹69,999.00</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                    </li>
                    {/* <!-- start single product item --> */}
                                          
                                                                                  
                  </ul>
                  <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                </div>
                <div className="tab-pane fade" id="bestseller">
                 <ul className="aa-product-catg aa-featured-slider">
                    {/* <!-- start single product item --> */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src={img21} alt="polo shirt img"/></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Best Deals on Monitors</a></h4>
                          <span className="aa-product-price">35% off</span><span className="aa-product-price"><del>10% off</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                      </div>
                      {/* <!-- product badge --> */}
                      <span className="aa-badge aa-sale" href="#">SALE!</span>
                    </li>
                     {/* <!-- start single product item --> */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src={img22} alt="polo shirt img"/></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                        <figcaption>
                          <h4 className="aa-product-title"><a href="#">Gaming Laptopd</a></h4>
                          <span className="aa-product-price">From ₹49,990 </span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* <!-- product badge --> */}
                       <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                    </li>
                    {/* <!-- start single product item --> */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src={img23} alt="polo shirt img"/></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                      </figure>
                      <figcaption>
                        <h4 className="aa-product-title"><a href="#">realme Pad </a></h4>
                        <span className="aa-product-price">Only at ₹14,999</span>
                      </figcaption>
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* <!-- product badge --> */}
                       <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                    </li>
                    {/* <!-- start single product item --> */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src={img24} alt="polo shirt img"/></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Asus Vivobook</a></h4>
                          <span className="aa-product-price">₹46,990</span><span className="aa-product-price"><del>₹43,990</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                    </li>
                                                                                                    
                  </ul>
                  <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                </div>

                            
              </div>
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
export default Popular
