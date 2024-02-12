import { actionsAuth } from 'src/store/slices/auth';
import { actionsInstallation } from 'src/store/slices/installation';
import { actionsTodo } from 'src/store/slices/todos';

import { actions } from '..';

describe('Component actions', () => {
  it('Should load the actions in just one object', () => {
    expect(actions).toEqual({
      ...actionsInstallation,
      ...actionsAuth,
      ...actionsTodo,
    });
  });
});
