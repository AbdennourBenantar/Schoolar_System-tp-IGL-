import React, { Component } from "react";
import "./login_style.css";
import logo from "./grad.png";
import auth from './auth';
import axios from 'axios';
import { withRouter } from "react-router-dom";
var res;
class Login extends Component {
  constructor(props) {
    super();
    
    this.state = {
      name: "abdou",
      password: "django123",
    };
    this.onchange = this.onchange.bind(this);
    this.log_submit = this.log_submit.bind(this);
  }
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  log_submit(e) {
    e.preventDefault();
    const userObject={
      username:this.state.name,
      password:this.state.password, 
    };
    
     axios.post('http://127.0.0.1:8000/login/',userObject).then(res=>{
       if(res.data.id==1){
       this.props.history.push('./admin');}
       else{
        this.props.history.push('./etudiant', {
          appState:{
            user:res.data.id,
          }
        });
       }  
     }).catch(err=>{
       console.log(err);
     }); 
    
  }

  render() {
    return (
      <div className="login-page">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <img className="fadeIn first" src={logo} id="icon" alt="User Icon" />
          <h3>Easy School</h3>
          <h2 className="active"> Sign In </h2>

          <form id="form" onChange={this.onchange} onSubmit={this.log_submit}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="name"
              placeholder="login"
              value={this.state.name}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              value={this.state.password}
            />
            <input
              id="submit_btn"
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onSubmit={this.log_submit}
            />
          </form>
        </div>
      </div>
      </div>
    );
  }
}

function OnSubmit() {}

export default withRouter(Login);
