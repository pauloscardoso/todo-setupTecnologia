import { store } from 'src/store';
import { actionsAuth } from 'src/store/slices/auth';
import { actionsInstallation } from 'src/store/slices/installation';
import { reducerManager } from '..';

describe('Component reducerManager', () => {
  it('Should load the initial configuration', () => {
    expect(reducerManager(store.getState(), { type: '' })).toEqual({
      auth: {
        activated: false,
      },
      installation: {
        id: '',
        fullName: '',
        email: '',
      },
      todos: [],
    });
  });
});
