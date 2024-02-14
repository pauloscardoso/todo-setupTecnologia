import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components/native';
import { persistor, store } from 'src/store';
import { Provider } from 'react-redux';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import theme from 'src/global/theme';
import types from './index.d';
import { PersistGate } from 'redux-persist/integration/react';

const Providers: React.FC<types.Props> = ({ children }) => (
  <SafeAreaView
    style={{ flex: 1, backgroundColor: theme.colors.grayLight }}
    testID='providers-safe'
  >
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme as DefaultTheme}>
          <LoadStatusBar testID='providers-status-bar' />
          {children}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </SafeAreaView>
);

export { Providers };

const LoadStatusBar: React.FC<types.LoadStatusBarProps> = () => {
  React.useEffect(() => {
    {
      Platform.OS === 'android'
        ? StatusBar.setBackgroundColor(theme.colors.grayLight, true)
        : undefined;
    }
    StatusBar.setBarStyle('dark-content');
  });

  return null;
};
