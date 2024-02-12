import { AnyAction, Reducer, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import todoReducer from './slices/todos';
import installation from './slices/installation';
import { persistentStorages } from './persistent-storage';
import { reduxStorage } from './storage';
import { persistReducer, persistStore } from 'redux-persist';
import { reducerManager } from './manager';
import { reducers } from './reducers';

const persistConfig = {
  key: '@todosetupTecnologia',
  storage: reduxStorage,
  whitelist: persistentStorages,
};

const persistedReducer: Reducer<RootState, AnyAction> = persistReducer(
  persistConfig,
  reducerManager,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    });
    return middleware;
  },
});

const persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
