const userCredentialMock = {
  user: {
    fullName: 'John Doe',
    email: 'XfW5t@example.com',
    uid: '1',
    emailVerified: false,
  },
};

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
    return new Promise((res) => {
      res(null);
    });
  }),
  createUserWithEmailAndPassword: jest.fn(() => {
    return new Promise((res) => {
      res(userCredentialMock);
    });
  }),
}));

export {};
