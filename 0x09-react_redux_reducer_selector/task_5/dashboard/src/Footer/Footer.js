import React, { useContext } from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy }  from '../utils/utils';
import AppContext from '../App/AppContext';


function Footer() {
  return (
    <AppContext.Consumer>
      {appState => (
        <footer className="footer">
          <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
          {appState.isLoggedIn && (
            <p>
              <a href="#">Contact us</a>
            </p>
          )}
        </footer>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;