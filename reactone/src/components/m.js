import React, { Component } from 'react'
import "../assets/css/style.css"
import "../assets/css/bootstrap.css"
import m1 from "../assets/img/images.jfif"
import m2 from "../assets/img/download.jfif"
import m3 from "../assets/img/nokia 3310.jfif"
import m4 from "../assets/img/mi9.jfif"
import m5 from "../assets/img/vivov9.jfif"
import m6 from "../assets/img/oppoa9.jfif"
import m7 from "../assets/img/oneplus8.jfif"
import m8 from "../assets/img/samsunga50.jfif"

export default class m extends Component {
    render() {
        return (
            <div>
                                       <section id="aa-product">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="aa-product-area">
              <div className="aa-product-inner">
                <div className="tab-pane fade in active" id="Mobiles">
                      <ul className="aa-product-catg">
                        {/* <!-- start single product item --> */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src={m1} alt="Samsung S20 img"/></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                              <h4 className="aa-product-title"><a href="#">Samsung S20</a></h4>
                              <span className="aa-product-price">$1450</span><span className="aa-product-price"><del>$65.50</del></span>
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
                            <a className="aa-product-img" href="#"><img src={m2} alt="Iphone 13"/></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                             <figcaption>
                              <h4 className="aa-product-title"><a href="#">Iphone 13</a></h4>
                              <span className="aa-product-price">$1700</span>
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
                            <a className="aa-product-img" href="#"><img src={m3} alt="nokia 3310 img"/></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                             <figcaption>
                              <h4 className="aa-product-title"><a href="#">Nokia 3310</a></h4>
                              <span className="aa-product-price">$450.50</span><span className="aa-product-price"><del>$605.50</del></span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                        </li>
                        {/* <!-- start single product item --> */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src={m4} alt="mi 9 "/></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Mi 9 </a></h4>
                              <span className="aa-product-price">$945.50</span><span className="aa-product-price"><del>$1365.50</del></span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                          {/* <!-- product badge --> */}
                          <span className="aa-badge aa-hot" href="#">HOT!</span>
                        </li>
                        {/* <!-- start single product item --> */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src={m5} alt="vivo v9"/></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Vivo V9</a></h4>
                              <span className="aa-product-price">$455.50</span>
                          </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                           <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                        </li>
                        {/* <!-- start single product item --> */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src={m6} alt="Oppo a9"/></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Oppo A9</a></h4>
                              <span className="aa-product-price">$345.50</span><span className="aa-product-price"><del>$655.50</del></span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                        </li>
                        {/* <!-- start single product item --> */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src={m7} alt="Oneplus 8"/></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Oneplus 8</a></h4>
                              <span className="aa-product-price">$1145.50</span><span className="aa-product-price"><del>$1650.50</del></span>
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
                            <a className="aa-product-img" href="#"><img src={m8} alt="Samsung A50"/></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Samsung A50</a></h4>
                              <span className="aa-product-price">$450.50</span>
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

