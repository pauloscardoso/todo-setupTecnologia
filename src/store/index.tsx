import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import todoReducer from './slices/todo';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
