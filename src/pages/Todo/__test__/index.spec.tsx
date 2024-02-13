import React from 'react';
import { fireEvent, renderApp, waitFor } from 'test-app';
import { TodoScreen } from '..';
import { createNavigationMock } from '__test__/mocks/react-navigation';
import { Alert } from 'react-native';
import { store } from 'src/store';

describe('Todo Screen', () => {
  it('should render screen', () => {
    const screen = renderApp(<TodoScreen />);
    expect(screen.getByText('Logout')).toBeOnTheScreen();
    expect(screen.getByText('Todo')).toBeOnTheScreen();
    expect(screen.getByPlaceholderText('Add a new task')).toBeOnTheScreen();
    expect(screen.getByText('+')).toBeOnTheScreen();
  });

  it('should logout', () => {
    const alertMessage = jest.spyOn(Alert, 'alert');

    const screen = renderApp(<TodoScreen />);
    const logoutButton = screen.getByText('Logout');

    fireEvent.press(logoutButton);

    waitFor(() => {
      expect(alertMessage).toHaveBeenCalledWith('Logout', 'Are you sure you want to logout?', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: expect.any(Function),
        },
      ]);
    });
  });

  it('should add todo', () => {
    const screen = renderApp(<TodoScreen />);

    const todoInput = screen.getByPlaceholderText('Add a new task');

    fireEvent.changeText(todoInput, 'test');

    fireEvent.press(screen.getByText('+'));

    waitFor(() => {
      expect(screen.getByText('test')).toBeOnTheScreen();
    });

    const deleteButton = screen.getByText('X');
    fireEvent.press(deleteButton);
  });

  it('should delete todo', () => {
    const screen = renderApp(<TodoScreen />);

    const todoInput = screen.getByPlaceholderText('Add a new task');

    fireEvent.changeText(todoInput, 'test');

    fireEvent.press(screen.getByText('+'));

    waitFor(() => {
      expect(screen.getByText('test')).toBeOnTheScreen();
    });

    const deleteButton = screen.getByText('X');
    fireEvent.press(deleteButton);

    waitFor(() => {
      expect(screen.queryByText('test')).toBeNull();
    });
  });

  it('should toggle todo', () => {
    const screen = renderApp(<TodoScreen />);

    const todoInput = screen.getByPlaceholderText('Add a new task');

    fireEvent.changeText(todoInput, 'test');

    fireEvent.press(screen.getByText('+'));

    waitFor(() => {
      expect(screen.getByText('test')).toBeOnTheScreen();

      expect(store.getState().todos[0].completed).toBe(false);
    });

    const editButton = screen.getByTestId('todo-toggleButton');

    fireEvent.press(editButton);

    waitFor(() => {
      expect(screen.getByText('test')).toBeOnTheScreen();

      expect(store.getState().todos[0].completed).toBe(true);
    });
  });
});
