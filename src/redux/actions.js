import { nanoid } from '@reduxjs/toolkit';

const actions = {
  type: 'Action Type',
  payload: 'Some payload',
};

// ACTIONS
// CHECK AS TRUE/FALSE
export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

// DELETE ITEM
export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: 'taskID',
  };
};

// NEW TASK
export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      text: text,
      completed: false,
    },
  };
};

// CHANGE FILTER
export const setStatusFilter = value => {
  return {
    type: 'filter/setStatusFilter',
    payload: value,
  };
};
