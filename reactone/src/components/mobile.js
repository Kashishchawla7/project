import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'

import axios from 'axios'

class Mobile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:[]
        }
    }
    componentDidMount()
    {
    axios.get("http://localhost:3001/product/")
    .then((response)=>{
        console.log(response.data,"products")
        this.setState({products:response.data})
        console.log(this.state.products);
    })
    .catch((error)=>{
        console.log(error);
        this.setState({error : "Error retreiving Data"})
    })
    }

    render() {
        const {products} = this.state;


        return (

                     <div className="tab-pane fade in active" id="Mobiles">
                      <ul className="aa-product-catg">
                        {/* <!-- start single product item --> */}
                        <li className="list">
                    
                            <div className="aa-product-img"/>
                         {
                             this.getProducts(products/101)
                         }
                        
                     
                     <h4 className="aa-product-title">
                         {/* {this.getProducts(products)} */}
                     </h4>
                     
                     <span className="aa-badge aa-sale" href="#">SALE!</span>
                     </li>
                   
                        </ul>
                        </div>
        )
    }

    getProducts(products) {
       console.log(products,"qqqq")
            return( products ? products && products.map((single)=>{
                return(
                  <div key={single._id} className="aa-product-catg">
                    {/* <div className="aa-product-img">                       */}
                      <img src={single.product_image}  alt="img"/>                      
                      <div className="aa-prom-content">
                      <span class="aa-product-price">{single.product_price}</span>
                        <span>Sale</span>
                        <h4><a  href="#">{single.product_name}</a></h4>                        
                      </div>
                    {/* </div> */}
                  </div>
                )
                
            }) :null
          )
        
    }
}
<div></div>
export default Mobile