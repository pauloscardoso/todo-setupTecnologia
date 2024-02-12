import { combineReducers } from '@reduxjs/toolkit';
import installation from 'src/store/slices/installation';
import auth from 'src/store/slices/auth';
import todos from 'src/store/slices/todos';

const reducers = combineReducers({
  auth,
  installation,
  todos,
});

export { reducers };
