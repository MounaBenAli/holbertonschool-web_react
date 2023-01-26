import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    login: {
        margin: '40px',
        font: '18px Helvetica, Arial, sans-serif',
        fontSize: '15px',
        marginRight: '9px',
        marginLeft: '9px',
    },
    divSize: {
        '@media (max-width: 900px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            margin: '5px 0',
        }
    },
    inputSize: {
        '@media (max-width: 900px)': {
          width: '30%',
          margin: '9px 0',
      }
    },
});


function Login() {
    return (
        <Fragment >
            <div className={css(styles.divSize)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor="email"> Email:  </label>
                <input type="text" id="email" name="email" placeholder="Please Enter Your Email" className={css(styles.login, styles.inputSize)}/>
                <label htmlFor="password"> Password:  </label>
                <input type="text" id="password" name="password"  placeholder="Please Enter Your Password" className={css(styles.login, styles.inputSize)}/>
                <button type="button" className={css(styles.inputSize)}> OK</button>
            </div>
        </Fragment>
    );
}
  
export default Login;
