import React from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import theme from 'src/global/theme';
import { store } from 'src/store';
import { ThemeProvider, DefaultTheme } from 'styled-components/native';
import { act, renderApp, waitFor } from 'test-app';
import { actionsAuth } from 'src/store/slices/auth';
import * as useAppHooks from 'src/store/hooks';
import { Routes } from '..';

const CustomProviders: React.FC = ({ children }: GlobalProps.all) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme as DefaultTheme}>{children}</ThemeProvider>
    </Provider>
  );
};

jest.mock('src/routes/app', () => {
  const ReactMock = require('react');
  return () => ReactMock.createElement('App-Mock', { testID: 'route-app' });
});
jest.mock('src/routes/auth', () => {
  const ReactMock = require('react');
  return () => ReactMock.createElement('Auth-Mock', { testID: 'route-auth' });
});
jest.mock('@react-navigation/native', () => {
  const ReactMock = require('react');
  return {
    NavigationContainer: ReactMock.forwardRef(
      ({ children, ...props }: GlobalProps.elementChild, ref: React.MutableRefObject<unknown>) => {
        ref.current = 'test';
        return ReactMock.createElement(
          'NavigationContainer-Mock',
          { ...props, testID: 'navigation-mock', refMock: ref },
          children,
        );
      },
    ),
  };
});

describe('Component Routes', () => {
  it('Should load auth route', () => {
    Platform.OS = 'android';
    const { getByTestId } = renderApp(<Routes />, { wrapper: CustomProviders });
    expect(getByTestId('navigation-mock')).toHaveProp('refMock', { current: 'test' });
    expect(getByTestId('route-auth')).toBeOnTheScreen();
  });

  it('Should load app route without session', () => {
    Platform.OS = 'macos';
    act(() => {
      store.dispatch(actionsAuth.signIn());
    });
    const { getByTestId } = renderApp(<Routes />, { wrapper: CustomProviders });
    expect(getByTestId('navigation-mock')).toHaveProp('refMock', { current: 'test' });
    expect(getByTestId('route-app')).toBeOnTheScreen();
  });
});
