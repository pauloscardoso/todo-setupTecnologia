import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { persistor, store } from '..';
import { reduxStorage } from '../storage';

jest.mock('redux-persist', () => {
  return {
    ...jest.requireActual('redux-persist'),
    persistStore: jest.fn().mockImplementation((e) => e),
    persistReducer: jest
      .fn()
      .mockImplementation((e, i) => jest.requireActual('redux-persist').persistReducer(e, i)),
  };
});
jest.mock('@reduxjs/toolkit', () => {
  return {
    ...jest.requireActual('@reduxjs/toolkit'),
    configureStore: jest
      .fn()
      .mockImplementation((e) => jest.requireActual('@reduxjs/toolkit').configureStore(e)),
  };
});

describe('Component store', () => {
  it('Should create redux configuration', () => {
    expect(!!persistor).toBe(true);
    expect(!!store).toBe(true);

    expect(persistReducer).toHaveBeenCalledWith(
      {
        key: '@todosetupTecnologia',
        storage: reduxStorage,
        whitelist: expect.any(Array),
      },
      expect.any(Function),
    );
    expect(persistReducer).toHaveReturnedWith(expect.any(Function));

    expect(configureStore).toHaveBeenCalledWith({
      reducer: expect.any(Function),
      middleware: expect.any(Function),
    });
    expect(configureStore).toHaveReturnedWith({
      '@@observable': expect.any(Function),
      dispatch: expect.any(Function),
      getState: expect.any(Function),
      replaceReducer: expect.any(Function),
      subscribe: expect.any(Function),
    });

    expect(persistStore).toHaveBeenCalledWith({
      '@@observable': expect.any(Function),
      dispatch: expect.any(Function),
      getState: expect.any(Function),
      replaceReducer: expect.any(Function),
      subscribe: expect.any(Function),
    });
    expect(persistStore).toHaveReturnedWith({
      '@@observable': expect.any(Function),
      dispatch: expect.any(Function),
      getState: expect.any(Function),
      replaceReducer: expect.any(Function),
      subscribe: expect.any(Function),
    });
  });
});
