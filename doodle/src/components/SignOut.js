/* eslint-disable no-console */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { auth } from '../firebase';

const SignOut = (props) => (
    <div style={{ width: '100px', margin: '60px auto'}}>
        <RaisedButton
            label="Sign Out"
            onClick={() => {
                console.log('Sign out');
                auth.signOut();
                props.handleLogout();
            }}
            primary
        /> 
    </div>
);
export default SignOut;