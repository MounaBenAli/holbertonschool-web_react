import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';



const styles = StyleSheet.create({
    login: {
        margin: '40px',
        font: '18px Helvetica, Arial, sans-serif',
        fontSize: '22px',
        paddingLeft: '70px',
        paddingTop: '40px',
        paddingBottom:' 450px',
        fontWeight: 'bold',
    },

});


function Login() {
    return (
        <Fragment >
            <div className={css(styles.login)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor="email"> Email:  </label>
                <input type="text" id="email" name="email" placeholder="Please Enter Your Email"/>
                <label htmlFor="password"> Password:  </label>
                <input type="text" id="password" name="password"  placeholder="Please Enter Your Password"/>
                <button type="button"> OK</button>
            </div>
        </Fragment>
    );
  }
  
  export default Login;