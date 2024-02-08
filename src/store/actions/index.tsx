import { actionsAuth } from '../slices/auth';
import { actionsTodo } from '../slices/todo';

// import { actionsInstallation } from '../slices/installation';
// import { actionsSession } from '../slices/session';

const actions = {
  ...actionsAuth,
  ...actionsTodo,
  // ...actionsInstallation,
  // ...actionsSession,
};

export { actions };
