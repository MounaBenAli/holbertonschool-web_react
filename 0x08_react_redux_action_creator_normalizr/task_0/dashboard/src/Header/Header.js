import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';


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



class Header extends React.Component {
    static contextType = AppContext;
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header className={css(styles.header)}>
                <img src={logo} className={css(styles.AppLogo)} alt="logo" />
                <h1>School dashboard</h1>
                {this.context.isLoggedIn ? (
                    <p  id="logoutSection">Welcome, {this.context.user.email}!</p>
                ) : (
                    <p><a onClick={() => this.context.logOut()}>(logout)</a></p>
                )}
            </header>
        );
    }
}
  
  export default Header;