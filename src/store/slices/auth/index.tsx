import { createSlice } from '@reduxjs/toolkit';
import typ from './index.d';

const initialState: typ.state = {
  activated: false,
};

const authStore = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state) => {
      state.activated = true;
    },
    signOut: (state) => {
      state.activated = false;
    },
  },
});

export const actionsAuth = authStore.actions;

export default authStore.reducer;
