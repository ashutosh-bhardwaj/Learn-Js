import { auth } from './firebase';

// Sign up
export const createUserWithEmailAndPassword = 
  (email, pass) => auth.createUserWithEmailAndPassword(email, pass);


// Sign in
export const signInWithEmailAndPassword = 
  (email, pass) => auth.signInWithEmailAndPassword(email, pass);

// Sign Out
export const signOut = () =>  auth.signOut();


// Password Reset
export const PasswordReset = email => auth.sendPasswordResetEmail(email);

// Password Change
export const PasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

export const onAuthStateChanged = (cb) => auth.onAuthStateChanged(cb);