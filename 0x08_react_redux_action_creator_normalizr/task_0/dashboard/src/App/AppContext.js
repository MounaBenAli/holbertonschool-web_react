import { createContext } from 'react';


const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const defaultLogOut = () => {};

const AppContext = createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});


export default AppContext;
