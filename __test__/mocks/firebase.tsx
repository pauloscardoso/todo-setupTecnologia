jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => {
    return {
      signInWithEmailAndPassword: jest.fn(),
    };
  }),
  getReactNativePersistence: jest.fn(() => {
    return {
      persistence: jest.fn(),
    };
  }),
  initializeAuth: jest.fn(() => {
    return {
      onAuthStateChanged: jest.fn(),
    };
  }),
  signInWithEmailAndPassword: jest.fn(() => {
    return new Promise((res, rej) => {
      res(null);
    });
  }),
}));

export {};
