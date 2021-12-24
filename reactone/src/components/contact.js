import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'
import imgc from '../assets/img/contact-us.png'

 class Contact extends Component {
    render() {
        return (
            <div>
    <section id="aa-catg-head-banner">
   <img src={imgc} alt="Contact us "/>
   <div className="aa-catg-head-banner-area">
     <div className="container">
      <div className="aa-catg-head-banner-content">
        <h2>Contact</h2>
        <ol className="breadcrumb">
          <li><a href="index.html">Home</a></li>         
          <li className="active">Contact</li>
        </ol>
      </div>
     </div> 
   </div>
  </section>
  {/* <!-- / catg header banner section --> */}
{/* <!-- start contact section --> */}
 <section id="aa-contact">
   <div className="container">
     <div className="row">
       <div className="col-md-12">
         <div className="aa-contact-area">
           <div className="aa-contact-top">
            
             <h2>We are waiting to assist you..</h2>
             <p>Our Team is happy to assist you. </p>
           </div>
           {/* <!-- contact map --> */}
           <div className="aa-contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6349.37833954462!2d76.65417107959973!3d30.517738884870667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1634668092312!5m2!1sen!2sin" width="1140" height="450" style={{border:0}}  loading="lazy"></iframe>             
           <div className="aa-contact-address">
             <div className="row">
               <div className="col-md-8">
                 <div className="aa-contact-address-left">
                   <form className="comments-form contact-form" action="">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">                        
                          <input type="text" placeholder="Your Name" className="form-control"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">                        
                          <input type="email" placeholder="Email" className="form-control"/>
                        </div>
                      </div>
                    </div>
                     <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">                        
                          <input type="text" placeholder="Subject" className="form-control"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">                        
                          <input type="text" placeholder="Company" className="form-control"/>
                        </div>
                      </div>
                    </div>                  
                     
                    <div className="form-group">                        
                      <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                    </div>
                    <button className="aa-secondary-btn">Send</button>
                  </form>
                 </div>
               </div>
               <div className="col-md-4">
                 <div className="aa-contact-address-right">
                   <address>
                     <h4>Digital Mart</h4>
                     <p>Your Shopping Partner</p>
                     <p><span className="fa fa-home"></span>Impinge Solutions , Headquarters Sirhind</p>
                     <p><span className="fa fa-phone"></span>+91 1234567890</p>
                     <p><span className="fa fa-envelope"></span>Email: support@digitalmart.com</p>
                   </address>
                 </div>
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
export default Contact