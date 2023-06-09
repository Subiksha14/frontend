import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'; 
function Login() {
  return (
    <div className="wrapper">
      <h1>Login</h1>
      <div className="login-wrapper">
        <div className="login-sidebar">
          <div>
          <Link to="/home">
            <button id="login" className="active">LogIn</button>
           </Link>
            <br />
          </div>
        </div>
        <div className="login-main">
          <h4>Enter Your Details Here</h4>
          <form>
            <input type="text" placeholder="USERNAME" /><br />
            <input type="password" placeholder="PASSWORD" /><br />
            <input type="submit" value="LogIn" />
          </form>
        </div>
        </div>
      </div>

  );
}

export default Login;
