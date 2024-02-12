import { store } from 'src/store';
import auth, { actionsAuth } from '..';

describe('Component auth', () => {
  it('Should create the slice', () => {
    expect(auth).toEqual(expect.any(Function));
    expect(actionsAuth).toEqual({
      signIn: expect.any(Function),
      signOut: expect.any(Function),
    });
  });

  it('Should initialize the state', () => {
    expect(store.getState().auth).toEqual(INITIAL_STATE);
  });

  it('Should run the function signIn', () => {
    store.dispatch(actionsAuth.signIn());
    expect(store.getState().auth.activated).toEqual(true);
    store.dispatch(actionsAuth.signIn());
    expect(store.getState().auth.activated).toEqual(true);
  });

  it('Should run the function signOut', () => {
    store.dispatch(actionsAuth.signIn());
    expect(store.getState().auth.activated).toEqual(true);
    store.dispatch(actionsAuth.signOut());
    expect(store.getState().auth.activated).toEqual(false);
    store.dispatch(actionsAuth.signOut());
    expect(store.getState().auth.activated).toEqual(false);
  });
});

const INITIAL_STATE = {
  activated: false,
};
