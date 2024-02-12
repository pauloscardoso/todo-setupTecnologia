import 'react-native';

jest.mock('react-native/Libraries/Utilities/BackHandler', () =>
  jest.requireActual('react-native/Libraries/Utilities/__mocks__/BackHandler.js'),
);

jest.mock('react-native/Libraries/PermissionsAndroid/PermissionsAndroid', () => {
  const PermissionsAndroid = jest.requireActual('react-native//Libraries/PermissionsAndroid/PermissionsAndroid');

  return {
    ...PermissionsAndroid,
    check: jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(true);
        }),
    ),
    request: jest.fn(
      () =>
        new Promise((resolve) => {
          resolve('granted');
        }),
    ),
  };
});

export {};

declare module 'react-native' {
  interface BackHandlerStatic {
    mockPressBack: () => void;
  }
}
