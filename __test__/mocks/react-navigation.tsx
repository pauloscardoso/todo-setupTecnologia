const createNavigationMock = () => {
  const navigateMock = {
    goBack: jest.fn(),
    navigate: jest.fn(),
    isFocused: jest.fn(),
  };
  return {
    navigationProps: {
      navigation: navigateMock as HelperTs.universal,
      route: { key: 'teste-t1', name: 'teste', params: 'teste-params' } as HelperTs.universal,
    },
    navigateMock,
  };
};

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => createNavigationMock(),
  };
});

export { createNavigationMock };
