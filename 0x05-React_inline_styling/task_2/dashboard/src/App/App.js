import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';



const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent',  html: { __html: getLatestNotification()} },
];

const styles = StyleSheet.create({
  login: {
    paddingLeft: '70px',
    paddingTop: '40px',
    paddingBottom: '450px',
  },
  footer: {
    borderTop: '3px solid #e01d3f',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.keyCode === 72) {
        alert("Logging you out");
        this.props.logOut();
    }
}

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <Notifications listNotifications={listNotifications} />
            <div className="App">
              {/* Header */}
              <header className="header">
                <Header />
              </header>
              {/* Body & Login & CourseList & BodySection */}
              <div className={css(styles.login)}>
                  {isLoggedIn ? (
                      <BodySectionWithMarginBottom title="Course list">
                        <CourseList listCourses={listCourses}/>
                      </BodySectionWithMarginBottom>
                  ) : (
                      <BodySectionWithMarginBottom title="Log in to continue">
                        <Login />
                      </BodySectionWithMarginBottom>
                  )}
              </div>
              <BodySection title="News from the School">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida luctus nulla, et condimentum ante gravida at. Fusce ut nunc eget lacus scelerisque pharetra in vel eros. </p>
              </BodySection>
              {/* footer */}
              <footer className={css(styles.footer)}>
                  <Footer />
              </footer>
            </div>
       </>
    );
  }
}


App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined,
}


export default App;
