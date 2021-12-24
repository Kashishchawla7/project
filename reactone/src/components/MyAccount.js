import React, { Component } from 'react'
import {Link} from 'react-router-dom' 
import "../assets/css/style.css"
import "../assets/css/bootstrap.css"

import axios from 'axios'


class MyAccount extends Component {
    
  constructor(props){
      super(props)

      this.state={
          email:'',
          name:'',
          number:'',
          password:'',
          submitted:false
      }
  }
  userNameChange = (event)=>{
      this.setState(
          {
              name:event.target.value
          }
      )
  }

  NumberChange = (event)=>{
    this.setState(
        {
          number:event.target.value
        }
    )
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
          "name":this.state.name,
          "number":this.state.number,
          "email":this.state.email,
          "password":this.state.password
      }
      console.log(UserData);
      axios({
          method:'POST',
          headers:{'Content-Type':'application/json'},
          url:"http://localhost:3001/register",
          data:UserData
      })
      .then((Response)=>{

          if(Response.data.result === 'success'){
              alert("Succesfully registered");
            
              this.setState({
                  name:"",
                  number:"",
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
    const {name,number,email,password}=this.state;
    
        return (
            <div>
               <section id="aa-myaccount">
   <div className="container">
     <div className="row">

{/*  
       <div className="col-md-12">
        <div className="aa-myaccount-area">         
            <div className="row">
              <div className="col-md-6">
                <div className="aa-myaccount-login">
                <h4>Login</h4>
                 <form onSubmit={this.submitHandler} className="aa-login-form">
                  <label for="">Username or Email address<span>*</span></label>
                   <input type="text" value={name}/>
                   <label for="">Password<span>*</span></label>
                    <input type="password" value={password}/>
                    <button type="submit" className="aa-browse-btn">Login</button>
                    <label className="rememberme" for="rememberme"><input type="checkbox" id="rememberme"/> Remember me </label>
                    <p className="aa-lost-password"><a href="#">Lost your password?</a></p>
                  </form>
                </div>
              </div> */}
              <div className="col-md-12" style={{padding:"60px"}}>
                <div className="aa-myaccount-register">               
                 <div style={{color:"black", fontSize:"50px"}}><b>Register</b></div>
                 <form onSubmit={this.submitHandler} className="aa-login-form">
                    <label  for ="name">Name</label>
                    <input  type="text"  name="name" value={name} onChange={this.userNameChange}/>
                    <label className="col-md-12" for="number">Mobile No.<span>*</span></label>
                    <input  className="col-md-12" type="text" name="number" value={number} onChange={this.NumberChange}/>
                    

                    <label  className="col-md-12" for="email">Username or Email address<span>*</span></label>
                    <input  className="col-md-12" type="text" name="email" value={email} onChange={this.EmailChange}/>


                    <label for="password">Password<span>*</span></label>
                    <input type="text" name="password" value={password} onChange={this.PasswordChange}/>

                    <button type="submit" className="aa-browse-btn">Register</button>                    
                  </form>
                </div>
              </div>
            </div>          
         {/* </div> */}
       {/* </div> */}
     {/* </div> */}
    </div>
  </section>
 </div>
        )
    }
}

export default MyAccount