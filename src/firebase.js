import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA7eebtdKEBC-GyoexymX3rdsM53JZ-imQ',
  authDomain: 'clone-a4d8f.firebaseapp.com',
  databaseURL: 'https://clone-a4d8f.firebaseio.com',
  projectId: 'clone-a4d8f',
  storageBucket: 'clone-a4d8f.appspot.com',
  messagingSenderId: '1037529852300',
  appId: '1:1037529852300:web:74478ae8d72dd7adb50ea9',
  measurementId: 'G-4BQBQ0D7LJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
