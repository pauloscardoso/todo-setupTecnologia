import React from 'react';
import { fireEvent, renderApp, waitFor } from 'test-app';
import { Login } from '..';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';
import { createNavigationMock } from '__test__/mocks/react-navigation';

describe('Login', () => {
  const { navigation } = createNavigationMock();
  it('should render screen', () => {
    const screen = renderApp(<Login navigation={navigation} />);
    expect(screen.getByText('Todo List')).toBeOnTheScreen();
    expect(screen.getByText('Log in')).toBeOnTheScreen();
    expect(screen.getByText(`Don't have an account?`)).toBeOnTheScreen();
    expect(screen.getByText('Sign up')).toBeOnTheScreen();

    expect(screen.getByPlaceholderText('E-mail')).toBeOnTheScreen();
    expect(screen.getByPlaceholderText('Password')).toBeOnTheScreen();
  });

  it('should go to registration', () => {
    const screen = renderApp(<Login navigation={navigation} />);

    fireEvent.press(screen.getByText('Sign up'));

    expect(navigation.navigate).toHaveBeenCalledWith('Registration');
  });

  it('should show password message alert when password is less than 6', async () => {
    const email = 'XfW5t@example.com';
    const passwordLessThan6 = '12345';

    jest.spyOn(Alert, 'alert');

    const screen = renderApp(<Login navigation={navigation} />);

    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, passwordLessThan6);

    fireEvent.press(screen.getByText('Log in'));

    expect(Alert.alert).toHaveBeenCalledWith('Incorrect password', 'Please try again');

    waitFor(() => {
      expect(signInWithEmailAndPassword).not.toHaveBeenCalled();
    });
  });

  it('should login', async () => {
    const email = 'XfW5t@example.com';
    const password = '123456';

    const screen = renderApp(<Login navigation={navigation} />);

    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);

    fireEvent.press(screen.getByText('Log in'));

    waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalled();
    });
  });
});
