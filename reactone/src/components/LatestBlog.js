import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'
import img27 from '../assets/img/blog1.jpg'
import img28 from '../assets/img/blog2.jpg'
import img29 from '../assets/img/blog3.jpg'


 class LatestBlog extends Component {
    render() {
        return (
            <div>
    <section id="aa-latest-blog">`
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-latest-blog-area">
            <h2>LATEST BLOG</h2>
            <div className="row">
              {/* <!-- single latest blog --> */}
              <div className="col-md-4 col-sm-4">
                <div className="aa-latest-blog-single">
                  <figure className="aa-blog-img">                    
                    <a href="#"><img src={img27} alt="img"/></a>  
                      <figcaption className="aa-blog-img-caption">
                      <span href="#"><i className="fa fa-eye"></i>5K</span>
                      <a href="#"><i className="fa fa-thumbs-o-up"></i>426</a>
                      <a href="#"><i className="fa fa-comment-o"></i>20</a>
                      <span href="#"><i className="fa fa-clock-o"></i>June 26, 2016</span>
                    </figcaption>                          
                  </figure>
                  <div className="aa-blog-info">
                    <h3 className="aa-blog-title"><a href="#">Echo Dot (4th Gen, 2020 release)</a></h3>
                    <p>It's really an impulsive purchase 😀. But still you should experience echo devices at least once. Just to experience the technology. In many things it is useful, like asking questions, weather, alarm, news etc.</p> 
                    <a href="#" className="aa-read-mor-btn">Read more <span className="fa fa-long-arrow-right"></span></a>
                  </div>
                </div>
              </div>
              {/* <!-- single latest blog --> */}
              <div className="col-md-4 col-sm-4">
                <div className="aa-latest-blog-single">
                  <figure className="aa-blog-img">                    
                    <a href="#"><img src={img28} alt="img"/></a>  
                      <figcaption className="aa-blog-img-caption">
                      <span href="#"><i className="fa fa-eye"></i>5K</span>
                      <a href="#"><i className="fa fa-thumbs-o-up"></i>426</a>
                      <a href="#"><i className="fa fa-comment-o"></i>20</a>
                      <span href="#"><i className="fa fa-clock-o"></i>June 26, 2016</span>
                    </figcaption>                          
                  </figure>
                  <div className="aa-blog-info">
                    <h3 className="aa-blog-title"><a href="#">Redmi Note 10S </a></h3>
                    <p>It was the highest demanded color. It will get back to stock on 12 October,2021. You can go for other colors like Deep Sea Blue.</p> 
                     <a href="#" className="aa-read-mor-btn">Read more <span className="fa fa-long-arrow-right"></span></a>         
                  </div>
                </div>
              </div>
              {/* <!-- single latest blog --> */}
              <div className="col-md-4 col-sm-4">
                <div className="aa-latest-blog-single">
                  <figure className="aa-blog-img">                    
                    <a href="#"><img src={img29} alt="img"/></a>  
                      <figcaption className="aa-blog-img-caption">
                      <span href="#"><i className="fa fa-eye"></i>5K</span>
                      <a href="#"><i className="fa fa-thumbs-o-up"></i>426</a>
                      <a href="#"><i className="fa fa-comment-o"></i>20</a>
                      <span href="#"><i className="fa fa-clock-o"></i>June 26, 2016</span>
                    </figcaption>                          
                  </figure>
                  <div className="aa-blog-info">
                    <h3 className="aa-blog-title"><a href="#">Fire-Boltt Beast Pro Bluetooth </a></h3>
                    <p>I had a bad experience here with the seller as well as Amazon. And no one is hearing inspite of putting numerous calls, mails and docial media tweets.
                      The Grey colour watch they providing have white band but the Amazon App mentions colour as Grey. I ordered replacement and next day i get a message that replacement is delivered but it was never delivered as original product with me only still.</p> 
                    <a href="#" className="aa-read-mor-btn">Read more <span className="fa fa-long-arrow-right"></span></a>
                  </div>
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
export default LatestBlog
