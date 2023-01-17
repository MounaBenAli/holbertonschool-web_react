import React, { Fragment } from 'react';
import './Login.css';

function Login() {
    return (
        <Fragment>
            <p>Login to access the full dashboard</p>
            <label for="email"> Email:  </label>
            <input type="text" id="email" name="email"/>
            <label for="password"> Password:  </label>
            <input type="text" id="password" name="password"/>
            <button type="button"> OK</button>
        </Fragment>
    );
  }
  
  export default Login;