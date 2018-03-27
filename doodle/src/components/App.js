/* eslint-disable no-console */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import * as routes from '../contants/routes';
import Navigation from './Navigation';
import Signup, { SignUpLink } from './Signup';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Me from './Me';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn : false };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    console.log('Logging user...');
    this.setState({ isLoggedIn : true });
  }

  handleLogout() {
    console.log('Logging user...');
    this.setState({ isLoggedIn : false });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <Router>
        <MuiThemeProvider>
          <Navigation />
          <Route path={routes.SIGN_UP} render={() => <Signup handleLogin={this.handleLogin}/>} />
          <Route path={routes.SIGN_IN} render={() => <SignIn  handleLogin={this.handleLogin}/>} />
          <Route
            path={routes.SIGN_OUT}
            render={() => <SignOut handleLogout={this.handleLogout}/>}
          />
          {isLoggedIn && <Route path={routes.HOME} render={() => <Paper>Home</Paper>} />}
          {!isLoggedIn && <Redirect to={routes.LANDING}/>}
          <Route
            exact
            path={routes.LANDING}
            component={NoAuth}
          />
          
          {isLoggedIn && <Route path={routes.ME} component={Me} />}
          {!isLoggedIn && <Route path={routes.ME} component={NoAuth} />}
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;

const NoAuth = () => (
  <Paper 
    zDepth={2}
    style={styles.container}
  > 
    Have an account <Link style={styles.link}to={routes.SIGN_IN}> Sign-in </Link>
    <SignUpLink />
  </Paper>
);

const styles = {
  container: {
    width: '100%',
    margin: '0 auto',
    padding: '40px',
    fontSize: '20px'
  },
  link: {
    textDecoration: 'none',
    fontWeight: '900',
    color: '#333',
    padding: '10px'
  },
};