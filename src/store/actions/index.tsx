import { actionsAuth } from '../slices/auth';
import { actionsTodo } from '../slices/todo';
import { actionsInstallation } from '../slices/installation';

const actions = {
  ...actionsAuth,
  ...actionsTodo,
  ...actionsInstallation,
};

export { actions };
