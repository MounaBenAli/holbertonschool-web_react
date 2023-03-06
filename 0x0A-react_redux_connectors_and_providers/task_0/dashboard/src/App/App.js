import React, { Component } from 'react'
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';	
import { connect } from 'react-redux';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
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
    this.state = {
      displayDrawer: false,
      email: 'user@example.com',
      password: 'examplepassword',
      isLoggedIn: false,
      logOut: () => this.logOut(),
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  };

  markNotificationAsRead(id) {
    const { listNotifications } = this.state;
    const updatedList = listNotifications.filter(notification => notification.id !== id);
    this.setState({ listNotifications: updatedList });
  };

  logIn (email, password) {
    this.setState({
      email: email,
      password: password,
      isLoggedIn: true
  })
};

  logOut () {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: true,
    })
};

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

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
}

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
}

render() {
  return (
    <AppContext.Provider value={this.state}>	
      <>
        <Notifications
          listNotifications={this.state.listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className="App">
          {/* Header */}
          <header className="header">
            <Header />
          </header>
          {/* Body & Login & CourseList & BodySection */}
          {this.state.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          {/* Footer */}
          <Footer className={css(styles.footer)} />
        </div>
      </>
    </AppContext.Provider>	
  );
  }
}

const mapStateToProps= (state) => ({
  isLoggedIn: state.get('isUserLoggedIn')
});

connect(mapStateToProps)(App);
export default App;