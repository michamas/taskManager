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
import {
  fetchTasks,
  addTask,
  deleteTask,
  toggleCompleted,
} from './operations.js';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  // Slice name
  name: 'tasks',
  // Initial state of the slice reducer
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Extrareducers object for createAsyncThunk
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    // or:
    [addTask.pending]: handlePending,
    [deleteTask.pending]: handlePending,
    [toggleCompleted.pending]: handlePending,
    [fetchTasks.rejected]: handleRejected,
    [addTask.rejected]: handleRejected,
    [deleteTask.rejected]: handleRejected,
    [toggleCompleted.rejected]: handleRejected,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
  },
  /*
  // Reducers object
  reducers: {
    // Executed when the HTTP request starts
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    // Will be executed if the HTTP request was successful
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // Execute if HTTP request fails
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // addTask: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },
    //   prepare(text) {
    //     return {
    //       payload: {
    //         text,
    //         id: nanoid(),
    //         completed: false,
    //       },
    //     };
    //   },
    // },
    // deleteTask(state, action) {
    //   const index = state.findIndex(task => task.id === action.payload);
    //   state.splice(index, 1);
    // },
    // toggleCompleted(state, action) {
    //   for (const task of state) {
    //     if (task.id === action.payload) {
    //       task.completed = !task.completed;
    //       break;
    //     }
    //   }
    // },
  },
  */
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
// Action generators
// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// slice reducer
// export const tasksReducer = tasksSlice.reducer;
