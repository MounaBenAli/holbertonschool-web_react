import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
          <div className="App">

              {/* Header */}
              <header className="header">
                <Header />
              </header>

              {/* Body & Login */}
              <div className="login">
                {isLoggedIn ? <CourseList /> : <Login />}
              </div>

              {/* footer */}
              <footer className="footer">
                <Footer />
              </footer>

          </div>
     </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
}

export default App;
