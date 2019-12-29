import React, { Component } from "react";
import "./login_style.css";
import logo from "./grad.png";
import auth from './auth'

class Login extends Component {
  constructor(props) {
    super();
    
    this.state = {
      name: "",
      password: ""
    };
    this.onchange = this.onchange.bind(this);
    this.log_submit = this.log_submit.bind(this);
  }
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  log_submit(e) {
    e.preventDefault();
    auth.login(()=>{
      this.props.history.push('./admin')
    })
    
  }

  render() {
    return (
      <div className="login-page">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <img className="fadeIn first" src={logo} id="icon" alt="User Icon" />
          <h3>Easy School</h3>
          <h2 className="active"> Sign In </h2>

          <form onChange={this.onchange} onSubmit={this.log_submit}>
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

export default Login;
