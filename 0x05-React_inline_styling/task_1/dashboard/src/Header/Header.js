import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';



const styles = StyleSheet.create({
    header: {
        '--clr-primary': '#e01d3f',
        font: '18px Helvetica, Arial, sans-serif',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: 'var(--clr-primary)',
        fontSize: '22px',
        borderBottom: '2px solid'
    },
    AppLogo: {
        height: '200px'
    }
});



function Header() {
    return (

        <header className={css(styles.header)}>
          <img src={logo} className={css(styles.AppLogo)} alt="logo" />
          <h1> School dashboard </h1>
        </header>

    );
  }
  
  export default Header;