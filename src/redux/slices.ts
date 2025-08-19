import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    isDone: (state, action) => {
      for (const task of state.items) {
        if (task.id === action.payload) {
          task.isDone = !task.isDone;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, isDone } = slice.actions;

export const selectTasks = (state) => state.tasks.items;

export default slice.reducer;
