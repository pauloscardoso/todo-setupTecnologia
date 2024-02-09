import { createSlice } from '@reduxjs/toolkit';
import typ from './index.d';

const initialState: typ.state = {
  id: '',
  fullName: '',
  email: '',
};

const slice = createSlice({
  name: 'installation',
  initialState,
  reducers: {
    setInstallation: (state, { payload }: typ.actionInstallation) => {
      return {
        ...state,
        id: payload.id,
        fullName: payload.fullName,
        email: payload.email
      };
    },
  },
});

export const actionsInstallation = slice.actions;

export default slice.reducer;
