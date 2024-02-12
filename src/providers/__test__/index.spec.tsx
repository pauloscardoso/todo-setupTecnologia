import React from 'react';
import { StatusBar, View } from 'react-native';
import { renderApp } from 'test-app';
import { Providers } from '..';

describe('Component Providers', () => {
  it('Should render in the correct sequence', () => {
    StatusBar.setBackgroundColor = jest.fn();

    const { getByTestId } = renderApp(
      <Providers>
        <View testID='view' />
      </Providers>,
      { wrapper: undefined },
    );

    const safeView = getByTestId('providers-safe');
    expect(safeView).toHaveStyle({ flex: 1 });

    const redux = safeView.props.children.props;
    expect(redux.store).toEqual(expect.any(Object));

    const persist = redux.children.props;
    expect(persist.persistor).toEqual(expect.any(Object));

    const theme = persist.children.props;
    expect(theme.theme).toEqual(expect.any(Object));

    expect(theme.children[0].props.testID).toEqual('providers-status-bar');
    expect(theme.children[1].props.testID).toEqual('view');
  });
});
