import React, { Component } from 'react'
import {Link} from 'react-router-dom' 
import "../assets/css/style.css"
import "../assets/css/bootstrap.css"

import axios from 'axios'

 class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            submitted:false
        }
    }
    EmailChange = (event)=>{
        this.setState(
            {
                email:event.target.value
            }
        )
    }

    PasswordChange = (event)=>{
        this.setState(
            {
                password:event.target.value
            }
        )
    }

    submitHandler = (event) =>{
        event.preventDefault();
        var UserData = {
            "email":this.state.email,
            "password":this.state.password
        }
        console.log(UserData);
        axios({
            method:'POST',
            headers:{'Content-Type':'application/json'},
            url:"http://localhost:3001/userLogin",
            data:UserData
        })
        .then((response)=>{
            if(response.data.result === 'success'){
                alert("Succesfully logined");
                localStorage.setItem("email",this.state.email);


                // set local storage here
                this.setState({
                    email:"",
                    password:"",
                    submitted:!this.state.submitted
                })
                this.props.history.push({
                    pathname:"/"
                })
            }
            else{
                alert('registration failed');
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    }


    render() {
    const {email,password}=this.state;

        return (
            <div>
                 <section id="aa-myaccount">
   <div className="container">
     <div className="row">


       <div className="col-md-12">
        <div className="aa-myaccount-area">         
            <div className="row">
              <div className="col-md-12">
                <div className="aa-myaccount-login">
                <h4>Login</h4>
                 <form onSubmit={this.submitHandler} className="aa-login-form">
                  <label for="">Username or Email address<span>*</span></label>
                   <input type="text" value={email} onChange={this.EmailChange}/>
                   <label for="">Password<span>*</span></label>
                    <input type="password" value={password} onChange={this.PasswordChange}/>
                    <button type="submit" className="aa-browse-btn">Login</button>
                    <label className="rememberme" for="rememberme"><input type="checkbox" id="rememberme"/> Remember me </label>
                    <p className="aa-lost-password"><a href="#">Lost your password?</a></p>
                  </form>
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
export default Login