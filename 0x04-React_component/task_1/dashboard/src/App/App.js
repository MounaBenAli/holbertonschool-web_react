import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';


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
    const { logOut } = this.props;

    return (
      <>
        <Notifications listNotifications={listNotifications} />
            <div className="App">

                {/* Header */}
                <header className="header">
                  <Header />
                </header>
  
                {/* Body & Login */}
                <div className="login">
                  {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login />}
                </div>
  
                {/* footer */}
                <footer className="footer">
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
  logOut: () => {},
}


export default App;
