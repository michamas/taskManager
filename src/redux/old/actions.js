// /*
// ACTIONS - objects that pass data from components to the store
// and signal wat event has occured in the interface
//         - should carry minimum necessary set of information
//         enough to changes the state
//         - sent by useDispatcj

// type - describes the type of event in the interface (domain/eventName)
//       domain - category, ===property nam of the redux state
//       eventName - event describing the action
// payload - passed data
// */
// import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// //=============== REDUX TOOLKIT ========================
// export const addTask = createAction('tasks/AddTask', text => {
//   return {
//     payload: {
//       text,
//       id: nanoid(),
//       completed: false,
//     },
//   };
// });
// // W generatorze akcji jest właściwość type
// console.log(addTask.type); // "tasks/AddTask"

// // Metoda toString() funkcji addTask została przedefiniowana
// console.log(addTask.toString()); // "tasks/AddTask"

// export const deleteTask = createAction('tasks/deleteTask');
// export const toggleCompleted = createAction('tasks/toggleCompleted');
// export const setStatusFilter = createAction('filters/setStatusFilter');

// //=============== JUST REDUX ========================
// /*
// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };

// export const deleteTask = taskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };
// */
