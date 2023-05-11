/*
ACTIONS - objects that pass data from components to the store
and signal wat event has occured in the interface
        - should carry minimum necessary set of information
        enough to changes the state
        - sent by useDispatcj

type - describes the type of event in the interface (domain/eventName)
      domain - category, ===property nam of the redux state
      eventName - event describing the action
payload - passed data
*/
import { nanoid } from 'nanoid';

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
