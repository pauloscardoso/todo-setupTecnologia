import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { render, RenderOptions } from '@testing-library/react-native';
import theme from 'src/global/theme';
import { store } from 'src/store';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';
import '@testing-library/jest-native/';
// import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect';

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={theme as DefaultTheme}>{children}</ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

const renderApp = (el: React.ReactElement, options?: RenderOptions) =>
  render(el, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';

export { renderApp };
