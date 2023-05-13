//=============== REDUX TOOLKIT ========================
/*
The createSlice() function is an add-on to createAction()
 and createReducer() that standardizes and further 
 simplifies the slice declaration. It takes a settings 
 parameter, creates and returns action types, action 
 generators, and a reducer. Let's analyze the creation 
 of a slice using the example of a task list.
*/

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksSlice = createSlice({
  // Slice name
  name: 'tasks',
  // Initial state of the slice reducer
  initialState: tasksInitialState,
  // Reducers object
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

// Action generators
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// slice reducer
export const tasksReducer = tasksSlice.reducer;
