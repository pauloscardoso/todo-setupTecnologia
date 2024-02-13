jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({ children }: GlobalProps.all) => children;
  return { KeyboardAwareScrollView };
});

export {};
