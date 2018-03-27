/* eslint-disable no-console */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { auth } from '../firebase';

const SignOut = (props) => (
    <RaisedButton
        label="Sign Out"
        onClick={() => {
            console.log('Sign out');
            auth.signOut();
            props.handleLogout();
        }}
        primary
    /> 
);
export default SignOut;