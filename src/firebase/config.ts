// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from 'firebase/app';
import { getAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyBhFwoC2HAxWYSpXv1cdFbkv3VLBgFn4lU',
  authDomain: 'todoauth-68a50.firebaseapp.com',
  projectId: 'todoauth-68a50',
  storageBucket: 'todoauth-68a50.appspot.com',
  messagingSenderId: '942675038733',
  appId: '1:942675038733:web:3267d7da910408dffa3b44',
  measurementId: 'G-QM0P3SFYST',
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { getAuth, getApp };
