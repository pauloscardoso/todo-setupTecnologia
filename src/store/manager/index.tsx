import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import { reducers } from 'src/store/reducers';

const reducerManager: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'auth/signOut') {
    return reducers(
      {
        installation: {
          id: state.installation.id,
          fullName: state.installation.fullName,
          email: state.installation.email,
        },
      } as RootState,
      action,
    );
  }
  return reducers(state, action);
};

export { reducerManager };
