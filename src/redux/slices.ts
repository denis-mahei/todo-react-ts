import { createSlice } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  text: string;
  isDone: boolean;
  deadline: string | null;
}

interface TasksState {
  items: Task[];
}

const slice = createSlice({
  name: 'tasks',
  initialState: {
    items: [] as Task[],
  } as TasksState,
  reducers: {
    addTask: (state, action: { payload: Task }) => {
      state.items.push(action.payload);
    },
    deleteTask: (state, action: { payload: string }) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    isDone: (state, action: { payload: string }) => {
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

export const selectTasks = (state: { tasks: TasksState }) => state.tasks.items;

export default slice.reducer;
