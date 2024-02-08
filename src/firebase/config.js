import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBhFwoC2HAxWYSpXv1cdFbkv3VLBgFn4lU',
  authDomain: 'todoauth-68a50.firebaseapp.com',
  databaseURL: 'https://todoAuth.firebaseapp.com.firebaseio.com',
  projectId: 'todoauth-68a50',
  storageBucket: 'todoauth-68a50.appspot.com',
  messagingSenderId: '942675038733',
  appId: '1:942675038733:web:a7ffd5c21c763d0ffa3b44',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
ƒ;
