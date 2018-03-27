/*
  eslint-disable no-console
*/

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { auth } from '../firebase';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '', 
      emailErrorMessage: '',
      passwordErrorMessage: '',
      logged: false,    
    };
  }

  handleClick = () => {
    const { email, password } = this.state;
    if (email === '') {
      this.setState({ emailErrorMessage: 'It looks like you forgot email!' });
    }
    if (password === '') {
      this.setState({ passwordErrorMessage: 'You can tell us the password!' });
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
          console.log(error);
          this.setState({ email: '', emailErrorMessage: 'Wrong Email', password: '', passwordErrorMessage: 'Wrong Password' });
        }
      );

    auth.onAuthStateChanged( user => {
      if (user) {
    
        console.log(`${user.email} has logged in`);
        this.props.handleLogin();
        this.setState({ logged: true });
      } else {
        console.log('User is signed out.');
      
      }
    });
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
      emailErrorMessage: '',
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
      passwordErrorMessage: '',
    });
  }

  render() {
    const screen = this.state.logged 
      ? <Redirect to="/home" />
      : (
        <Paper className="item" style={styles.formStyle} zDepth={2}>
          <h2 style={{ fontWeight: '200', color: '#939393', marginTop: '10px' }}>
            Sign In
          </h2>
          <br />
          <br />
          <TextField 
            hintText="Email"
            errorText={this.state.emailErrorMessage}
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <br />
          <br />
          <TextField 
            hintText="Password"
            type="password"
            errorText={this.state.passwordErrorMessage}
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <br />
          <RaisedButton 
            label="Log In" 
            primary 
            onClick={this.handleClick}
          />
        </Paper>  
      );
    return screen;
  }
}


const styles = {
  formStyle: {
    padding: '60px',
  },
};