const createNavigationMock = () => {
  const navigateMock = {
    goBack: jest.fn(),
    navigate: jest.fn(),
    isFocused: jest.fn(),
  };
  return {
    navigation: navigateMock as GlobalProps.all,
    navigateMock,
  };
};

export { createNavigationMock };
