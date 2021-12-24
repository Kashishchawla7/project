import React, { Component } from 'react'
import {Link} from 'react-router-dom' 
import "../assets/css/style.css"
import "../assets/css/bootstrap.css"

import axios from 'axios'

class Logout extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             email:localStorage.getItem(),
             submitted:true,
        }
        submitHandler = (event) =>{
            event.preventDefault();
            ema
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.submitHandler}>Logout</button>
            </div>
        )
    }
    
}