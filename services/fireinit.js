import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDlqIfBal3J5Nm0c3FxTS948s3_TihNEHg',
  authDomain: 'organiser-19a79.firebaseapp.com',
  databaseURL: 'https://organiser-19a79.firebaseio.com',
  projectId: 'organiser-19a79',
  storageBucket: 'organiser-19a79.appspot.com',
  messagingSenderId: '178181753542'
};

firebase.initializeApp(config);
console.debug('Firebase initialised');

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const store = firebase.firestore();
export default firebase;
