import { PayloadAction } from '@reduxjs/toolkit';

export namespace _ {
  export type state = TodoProps.Todo;

  export type actionTodo = PayloadAction<{
    id: number;
    text?: string;
  }>;
}

export default _;

export namespace TodoProps {
  export type Todo = {
    id: number;
    text?: string;
  };
}
