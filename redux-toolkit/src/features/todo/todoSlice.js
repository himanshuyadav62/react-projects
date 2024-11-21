import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", title: "Learn Redux" }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload,
      };
      console.log("add todo to state " + todo.title);
      state.todos.push(todo);
    },
    removeTodo: (state , action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo : (state, action) => {
        const index = state.todos.findIndex(todo => todo.id === action.payload.id);
        state.todos[index].title = action.payload.title;
    }
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
