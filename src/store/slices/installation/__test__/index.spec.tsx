import { store } from 'src/store';
import installation, { actionsInstallation } from '..';

describe('Component installation', () => {
  it('Should create the slice', () => {
    expect(installation).toEqual(expect.any(Function));
    expect(actionsInstallation).toEqual({
      setInstallation: expect.any(Function),
    });
  });

  it('Should initialize the state', () => {
    expect(store.getState().installation).toEqual(INITIAL_STATE);
  });

  it('Should run the function setInstallation', () => {
    store.dispatch(
      actionsInstallation.setInstallation({ id: '123', email: 'p@p.com', fullName: 'John Doe' }),
    );
    expect(store.getState().installation.id).toEqual('123');
    expect(store.getState().installation.email).toEqual('p@p.com');
    expect(store.getState().installation.fullName).toEqual('John Doe');
  });
});

const INITIAL_STATE = {
  id: '',
  fullName: '',
  email: '',
};
