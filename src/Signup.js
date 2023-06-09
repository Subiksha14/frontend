import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
const SignUpForm = () => {
  return (
    <form action="index.html" method="post">
      <h1>Sign Up</h1>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="user_name" />
        <label htmlFor="mail">Email:</label>
        <input type="email" id="mail" name="user_email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="user_password" />
      </fieldset>
      
      <Link to="/Login">
           <button type="submit">Sign Up</button>
      </Link>
     
    </form>
  );
};

export default SignUpForm;
