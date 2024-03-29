import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import types from './index.d';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: types.actionTodo) => {
      state.push({ id: state.length + 1, text: action.payload.text!!, completed: false });
    },
    toggleTodo: (state, action: types.actionTodo) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const actionsTodo = todoSlice.actions;
export default todoSlice.reducer;
