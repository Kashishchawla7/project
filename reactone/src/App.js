import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Menu from './components/menu';
import Crousal from './components/Crousal';
import Promo from './components/Promo';
import Popular from './components/popular';
import {Switch,Route,Link, BrowserRouter} from "react-router-dom"


import Support from './components/support';
import LatestBlog from './components/LatestBlog';
import ClientBrand from './components/ClientBrand';
import Subscribe from './components/subscribe';
import Bestseller from './components/bestseller';
import Footer from './components/footer';
import Mobile from './components/mobile';
import Products from './components/Products';
import Offer from './components/Offer';
import Blog from './components/blog';
import Contact from './components/contact';
import Checkout from './components/checkout';
import MyAccount from './components/MyAccount';
import Login from './components/login';
import DisplayCart from './components/displaycart';
import Wishlist from './components/wishlist';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

 

  render() {
    return (
      <div className="App">
         {/* <Header />  */}
          {/* <Menu /> */}
         {/* <Crousal />   */}
         {/* <Promo />  */}
         {/* <Mobile /> */}
        
         {/* <Offer/>   */}
          {/* <Popular /> */}
          {/* <Bestseller/> */}
         {/* <Support /> */}
         {/* <LatestBlog /> */}
         {/* <ClientBrand /> */}
         {/* <Subscribe />  */}
         {/* <Footer /> */}
         
         <BrowserRouter forceRefresh={true}>
         <Header /> 
          <Menu />
          
         {/* <Crousal /> */}
         <Switch>
          <Route exact path="/" component={Promo}></Route>
          <Route path="/products/:category_id" component={Products}></Route>
        </Switch>
          
        
        <Route exact path="/" component={Offer}></Route>
         

         <Route exact path="/" component={Popular}></Route>

          <Route exact path="/" component={Support}></Route>
          <Route exact path="/" component={LatestBlog}></Route>
          <Route exact path="/" component={ClientBrand}></Route>


          <Route exact path="/" component={Subscribe}></Route>
          
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact}/>

          <Route path="/bestseller" component={Popular}/>

          <Route path="/checkout" component={Checkout}/>
          <Route path="/myaccount" component={MyAccount}/>

          <Route path="/login" component={Login}></Route>
          <Route path="/displaycart" component={DisplayCart}></Route>
          <Route path="/wishlist" component={Wishlist}></Route>



          <Footer />
         
         </BrowserRouter>
        <div></div>
        
        
      </div>
    );
  }
}

export default App;
