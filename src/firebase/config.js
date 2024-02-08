import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBhFwoC2HAxWYSpXv1cdFbkv3VLBgFn4lU',
  authDomain: 'todoauth-68a50.firebaseapp.com',
  databaseURL: 'https://todoauth-68a50.firebaseapp.com',
  projectId: '942675038733',
  storageBucket: '942675038733.appspot.com',
  messagingSenderId: '942675038733',
  appId: '1:942675038733:web:a7ffd5c21c763d0ffa3b44',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
