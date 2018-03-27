import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBXRkF0bT9vvnof-3yra3XhLnm2QBqtAvk',
  authDomain: 'my-awesome-project-ba13c.firebaseapp.com',
  databaseURL: 'https://my-awesome-project-ba13c.firebaseio.com',
  projectId: 'my-awesome-project-ba13c',
  storageBucket: 'my-awesome-project-ba13c.appspot.com',
  messagingSenderId: '1045293845966',
};

firebase.initializeApp(config);

const auth = firebase.auth();

export { auth };
