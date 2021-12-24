import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'
import axios from 'axios'

import {Link} from 'react-router-dom'
// import Support from './support'

 class DisplayCart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          email:localStorage.getItem("email"),
            products:[]
        }
    }
    componentDidMount()
    {
    axios.get("http://localhost:3001/"+this.email)
    .then((response)=>{
       {
        console.log(response.data,"products")
        this.setState({products:response.data})
        console.log(this.state.products); 
       }
    })
    .catch((error)=>{
        console.log(error);
        this.setState({error : "Error retreiving Data"})
    })
    }
    
    


    render() {  
        const {email,products} = this.state;

        if (email!=null) 

        return (

                  <ul>
                      <li >
                      {
                             this.getProducts(products)
                       }
                       {/* console.log(req.body.email); */}
                       {/* console.log(req.body.name); */}
                      </li>

                        
                          
                        </ul>
        )
      else
      {
        console.log(email);
        this.props.history.push({
          pathname:"/"
        })
        throw alert("Login to continue");

      }

      }

    getProducts(products) {
       console.log(products,"qqqq")
            return( products ? products && products.map((single)=>{
                return(
                    <li style={{width:"49%",float:"left"}}>
                    <figure>
                      <a class="aa-product-img" href="#"><img src={single.product_image} alt="product_image"/></a>
                      
                        <figcaption>
                        <h4 class="aa-product-title"><a href="#">{single.product_name}</a></h4>
                        <span class="aa-product-price">{single.product_price}</span><span class="aa-product-price"></span>
                      </figcaption>
                    </figure>                        
                   
                    
                  
                  </li>
                )
                
            }) :null
          )
        
    }
}
export default DisplayCart