import React from 'react';
import { fireEvent, renderApp, waitFor } from 'test-app';
import { Registration } from '..';
import { createNavigationMock } from '__test__/mocks/react-navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';

describe('Registration', () => {
  const { navigation } = createNavigationMock();
  it('should render screen', () => {
    const screen = renderApp(<Registration navigation={navigation} />);
    expect(screen.getByText('Create Account')).toBeOnTheScreen();
    expect(screen.getByPlaceholderText('Full Name')).toBeOnTheScreen();
    expect(screen.getByPlaceholderText('E-mail')).toBeOnTheScreen();
    expect(screen.getByPlaceholderText('Password')).toBeOnTheScreen();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeOnTheScreen();
    expect(screen.getByText('Create account')).toBeOnTheScreen();
    expect(screen.getByText(/Already got an account?/i)).toBeOnTheScreen();
    expect(screen.getByText('Log in')).toBeOnTheScreen();
  });

  it('should go to login', () => {
    const screen = renderApp(<Registration navigation={navigation} />);
    fireEvent.press(screen.getByText('Log in'));

    waitFor(() => {
      expect(navigation.navigate).toHaveBeenCalledWith('Login');
    });
  });

  it('should register', async () => {
    const alertMessage = jest.spyOn(Alert, 'alert');

    const fullName = 'John Doe';
    const email = 'XfW5t@example.com';
    const password = '123456';
    const confirmPassword = '123456';

    const screen = renderApp(<Registration navigation={navigation} />);

    const fullNameInput = screen.getByPlaceholderText('Full Name');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');

    fireEvent.changeText(fullNameInput, fullName);
    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);
    fireEvent.changeText(confirmPasswordInput, confirmPassword);

    fireEvent.press(screen.getByText('Create account'));

    waitFor(() => {
      expect(createUserWithEmailAndPassword).toHaveBeenCalled();

      expect(alertMessage).toHaveBeenCalledWith(
        'Account created!',
        'Your account has been created successfully',
      );

      expect(navigation.navigate).toHaveBeenCalledWith('Login');
    });
  });

  it('should show password message alert when password is less than 6', async () => {
    const alertMessage = jest.spyOn(Alert, 'alert');
    const fullName = 'John Doe';
    const email = 'XfW5t@example.com';
    const passwordLessThan6 = '12345';
    const confirmPassword = '12345';

    const screen = renderApp(<Registration navigation={navigation} />);

    const fullNameInput = screen.getByPlaceholderText('Full Name');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');

    fireEvent.changeText(fullNameInput, fullName);
    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, passwordLessThan6);
    fireEvent.changeText(confirmPasswordInput, confirmPassword);

    fireEvent.press(screen.getByText('Create account'));

    waitFor(() => {
      expect(alertMessage).toHaveBeenCalledWith(
        'Invalid Password',
        'Please enter a password with at least 6 characters',
      );
      expect(createUserWithEmailAndPassword).not.toHaveBeenCalled();
    });
  });

  it('should show password message alert when passwords do not match', async () => {
    const alertMessage = jest.spyOn(Alert, 'alert');
    const fullName = 'John Doe';
    const email = 'XfW5t@example.com';
    const password = '123456';
    const confirmPassword = '1234567';

    const screen = renderApp(<Registration navigation={navigation} />);

    const fullNameInput = screen.getByPlaceholderText('Full Name');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');

    fireEvent.changeText(fullNameInput, fullName);
    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);
    fireEvent.changeText(confirmPasswordInput, confirmPassword);

    fireEvent.press(screen.getByText('Create account'));

    waitFor(() => {
      expect(alertMessage).toHaveBeenCalledWith(
        'Passwords do not match',
        'Please enter matching passwords',
      );
      expect(createUserWithEmailAndPassword).not.toHaveBeenCalled();
    });
  });

  it('should show email message alert when email is invalid', async () => {
    const alertMessage = jest.spyOn(Alert, 'alert');
    const fullName = 'John Doe';
    const email = 'john';
    const password = '123456';
    const confirmPassword = '123456';

    const screen = renderApp(<Registration navigation={navigation} />);

    const fullNameInput = screen.getByPlaceholderText('Full Name');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');

    fireEvent.changeText(fullNameInput, fullName);
    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);
    fireEvent.changeText(confirmPasswordInput, confirmPassword);

    fireEvent.press(screen.getByText('Create account'));

    waitFor(() => {
      expect(alertMessage).toHaveBeenCalledWith('Invalid Email', 'Please enter a valid email');
      expect(createUserWithEmailAndPassword).not.toHaveBeenCalled();
    });
  });

  it('should show name message alert when name is invalid', async () => {
    const alertMessage = jest.spyOn(Alert, 'alert');
    const fullName = '';
    const email = 'XfW5t@example.com';
    const password = '123456';
    const confirmPassword = '123456';

    const screen = renderApp(<Registration navigation={navigation} />);

    const fullNameInput = screen.getByPlaceholderText('Full Name');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');

    fireEvent.changeText(fullNameInput, fullName);
    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);
    fireEvent.changeText(confirmPasswordInput, confirmPassword);

    fireEvent.press(screen.getByText('Create account'));

    waitFor(() => {
      expect(alertMessage).toHaveBeenCalledWith('Invalid Name', 'Please enter your full name');
      expect(createUserWithEmailAndPassword).not.toHaveBeenCalled();
    });
  });
});
