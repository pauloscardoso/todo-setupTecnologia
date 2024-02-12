import React from 'react';
import { View } from 'react-native';
import { fireEvent, renderApp, screen } from 'test-app';

import Button from '..';

describe('Button Component', () => {
  it('Should show the icons', () => {
    renderApp(
      <Button iconLeft={<View testID="iconLeft" />} iconRight={<View testID="iconRight" />} styleViewIcon={{ backgroundColor: 'red' }}>
        button test
      </Button>,
    );

    expect(screen.queryByAccessibilityHint('loading')).toBeFalsy();
    expect(screen.getByTestId('iconLeft')).toBeOnTheScreen();
    expect(screen.getByText('button test')).toBeOnTheScreen();
    expect(screen.getByTestId('button-viewIconLeft')).toHaveStyle({ backgroundColor: 'red' });
    expect(screen.getByTestId('button-viewIconRight')).toHaveStyle({ backgroundColor: 'red' });
  });

  it('Should show loading', () => {
    renderApp(
      <Button loading opacity={0.5} iconLeft={<View testID="iconLeft" />} iconRight={<View testID="iconRight" />}>
        button test
      </Button>,
    );

    expect(screen.getByAccessibilityHint('loading')).toBeOnTheScreen();
    expect(screen.getByTestId('button-container')).toHaveStyle({ opacity: 0.7 });
    expect(screen.queryByTestId('iconLeft')).toBeFalsy();
    expect(screen.queryByTestId('iconRight')).toBeFalsy();
  });

  it('Should set prop activeOpacity by default', () => {
    renderApp(
      <Button color="blue" backgroundColor="green" bold opacity={0.5} styleText={{ fontSize: 2 }}>
        button test
      </Button>,
    );

    const button = screen.getByTestId('button-container');
    expect(button).toHaveStyle({ backgroundColor: 'green', opacity: 0.5 });
    expect(button.props.children[1]._owner.memoizedProps.activeOpacity).toBe(0.8);
  });

  it('Should set prop activeOpacity passed by parameter', () => {
    renderApp(
      <Button color="blue" activeOpacity={0} backgroundColor="green" bold opacity={0.5} styleText={{ fontSize: 2 }}>
        button test
      </Button>,
    );

    const button = screen.getByTestId('button-container');
    expect(button).toHaveStyle({ backgroundColor: 'green', opacity: 0.5 });
    expect(button.props.children[1]._owner.memoizedProps.activeOpacity).toBe(0);
  });

  it('Should render a string and change style', () => {
    renderApp(
      <Button color="blue" backgroundColor="green" bold opacity={0.5} styleText={{ fontSize: 2 }}>
        button test
      </Button>,
    );

    expect(screen.getByTestId('button-container')).toHaveStyle({ backgroundColor: 'green', opacity: 0.5 });
    expect(screen.getByText('button test')).toHaveStyle({ fontFamily: 'Poppins-Bold', color: 'blue', fontSize: 2 });

    screen.rerender(<Button bold={false}>button test</Button>);

    expect(screen.getByText('button test')).toHaveStyle({ fontFamily: 'Poppins-Regular' });
  });

  it('Should render a component', () => {
    renderApp(
      <Button>
        <View />
      </Button>,
    );

    expect(screen.getByTestId('button-touchable')).toBeOnTheScreen();
  });

  it('Should run the onPress function', () => {
    const mockFn = jest.fn();
    renderApp(<Button onPress={mockFn}>button test</Button>);
    fireEvent.press(screen.getByText('button test'), 'test press');
    expect(mockFn).toHaveBeenCalledWith('test press');
  });

  it('Should disable onPress function', () => {
    const mockFn = jest.fn();
    renderApp(
      <Button disabled onPress={mockFn}>
        button test
      </Button>,
    );

    fireEvent.press(screen.getByText('button test'), 'test press');
    expect(mockFn).not.toHaveBeenCalled();
  });

  it('Should return an empty child', () => {
    renderApp(<Button />);
    expect(screen.queryByTestId('iconLeft')).toBeFalsy();
    expect(screen.queryByTestId('button-touchable')).toBeFalsy();
    expect(screen.queryByText('')).toBeFalsy();
  });
});
