/*
OPERATIONS
-  asynchronous action generator, in the body 
of which other, synchronous action generators are called
- takes dispach and returns another function
- used for HTTP requests
*/

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
//   fetchingError,
//   fetchingInProgress,
//   fetchingSuccess,
// } from './tasksSlice.js';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

// createAsyncThunk - simplifies process of declaring async action
// createAsyncThunk(actionType, httpRequestFunction)

// GET @ /tasks
export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  // We use the underscore character as the name of the first parameter,
  // because we don't need it in this operation. otherwise 'arg'
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      // If the request is successful, we return a promise with data
      return response.data;
    } catch (e) {
      // If the request fails, return the promise
      // which will be rejected with an error text
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// POST @ /tasks
export const addTask = createAsyncThunk(
  'task/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /tasks/:id
export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Typical processs of fetching request
// const fetchTasks = () => async dispatch => {
//   try {
//     // Load indicator
//     dispatch(fetchingInProgress());
//     // HTTP request
//     const response = await axios.get('/tasks');
//     // Data processing
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Error processing
//     dispatch(fetchingError(e.message));
//   }
// };
