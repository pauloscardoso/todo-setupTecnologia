import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { Providers } from './providers';
import { Routes } from './route';

export default function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}
