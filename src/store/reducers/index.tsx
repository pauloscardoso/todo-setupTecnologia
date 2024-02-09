import { combineReducers } from '@reduxjs/toolkit';
import installation from 'src/store/slices/installation';
import auth from 'src/store/slices/auth';
import todo from 'src/store/slices/todo';

const reducers = combineReducers({
  auth,
  installation,
  todo,
});

export { reducers };
