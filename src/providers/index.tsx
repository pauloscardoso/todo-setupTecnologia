import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components/native';
import store from 'src/store';
import { Provider } from 'react-redux';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import theme from 'src/global/theme';
// import { PersistGate } from 'redux-persist/es/integration/react';
import typ from './index.d';

const Providers: React.FC<typ.Props> = ({ children }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.grayLight }}>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <ThemeProvider theme={theme as DefaultTheme}>
        <LoadStatusBar />
        {children}
      </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  </SafeAreaView>
);

export { Providers };

const LoadStatusBar = () => {
  React.useEffect(() => {
    {
      Platform.OS === 'android'
        ? StatusBar.setBackgroundColor(theme.colors.grayLight, true)
        : undefined;
    }
  });

  return null;
};
