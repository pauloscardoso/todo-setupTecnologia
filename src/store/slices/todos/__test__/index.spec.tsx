import { store } from 'src/store';
import todo, { actionsTodo } from '..';

describe('Component Todo', () => {
  it('Should create the slice', () => {
    expect(todo).toEqual(expect.any(Function));
    expect(actionsTodo).toEqual({
      addTodo: expect.any(Function),
      toggleTodo: expect.any(Function),
      deleteTodo: expect.any(Function),
    });
  });

  it('Should initialize the state', () => {
    expect(store.getState().todos).toEqual([]);
  });

  it('Should run the function addTodo', () => {
    store.dispatch(actionsTodo.addTodo({ id: 1, text: 'Sofá' }));
    expect(store.getState().todos).toEqual([{ id: 1, text: 'Sofá', completed: false }]);
    store.dispatch(actionsTodo.deleteTodo(1));
  });

  it('Should run the function toggleTodo', () => {
    store.dispatch(actionsTodo.addTodo({ id: 1, text: 'Sofá' }));
    store.dispatch(actionsTodo.toggleTodo({ id: 1, text: 'Sofá' }));
    expect(store.getState().todos).toEqual([{ id: 1, text: 'Sofá', completed: true }]);
    store.dispatch(actionsTodo.deleteTodo(1));
  });

  it('Should run the function deleteTodo', () => {
    store.dispatch(actionsTodo.addTodo({ id: 1, text: 'Sofá' }));
    store.dispatch(actionsTodo.deleteTodo(1));
    expect(store.getState().todos).toEqual([]);
  });
});
