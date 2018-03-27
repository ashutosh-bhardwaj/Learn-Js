import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import * as routes from '../contants/routes';
import { auth } from '../firebase';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const SignUpPage = ({ history }) => (
  <div>
    <h1 style={{ textAlign: 'center', color: '#01579b'}}>SignUp</h1>
    <SignUpForm history={history} />
  </div>
);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const {  email, passwordOne } = this.state;
    const { history } = this.props;
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log(authUser);
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
  };

  render() {
    const { passwordOne, passwordTwo, email, username, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <Paper 
        zDepth={2}
        style={{ width: '100%', margin: '0 auto', padding: '40px' }}
        >
        <TextField
          value={username}
          onChange={event =>
            this.setState(byPropKey('username', event.target.value))
          }
          type="text"
          hintText="Full Name"
        />
        <TextField
          value={email}
          onChange={event =>
            this.setState(byPropKey('email', event.target.value))
          }
          type="text"
          hintText="Email Address"
        />
        <TextField
          value={passwordOne}
          onChange={event =>
            this.setState(byPropKey('passwordOne', event.target.value))
          }
          type="password"
          hintText="Password"
        />
        <TextField
          value={passwordTwo}
          onChange={event =>
            this.setState(byPropKey('passwordTwo', event.target.value))
          }
          type="password"
          hintText="Confirm Password"
        />
        <br/>
        <RaisedButton 
          primary
          disabled={isInvalid} 
          onClick={this.onSubmit} 
          label="Sign up"
        />
      

        {error && <p>{error.message}</p>}
      </Paper>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link style={link} to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };

const link =  {
  textDecoration: 'none',
  fontWeight: '900',
  color: '#333',
  padding: '10px'
};