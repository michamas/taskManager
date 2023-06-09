// /* REDUCER - HOW ACTIONS ARE GOING TO TRANSORM STATE TO ANOTHER STATE
//             - function that takes the current state and an action
//             as args and returns new state
//             - responsible for processing all dispatched actions
//             and calculating the new state
//             - must be a pure function (not interfere outside, no side effects)
//             - are split based on the parts of Redux state that they change
// (state, action) => nextState

// ACTIONS - describe only what happend, not how the app state changes
// */

// import { combineReducers } from 'redux';
// import { statusFilters } from '../constants';
// import {
//   addTask,
//   deleteTask,
//   setStatusFilter,
//   toggleCompleted,
// } from './actions.js';
// import { createReducer } from '@reduxjs/toolkit';
// /*
// Initial Redux state value for the root reducer,
// if you don't pass the preloadedState parameter.
// */
// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];
// //=============== REDUX TOOLKIT ========================
// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     // return [...state, action.payload];
//     // ✅ Immer will replace this with an update operation
//     state.push(action.payload);
//   },
//   [deleteTask]: (state, action) => {
//     // return state.filter(task => task.id !== action.payload);
//     // ✅ Immer will replace this with an update operation
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index, 1);
//   },
//   [toggleCompleted]: (state, action) => {
//     // return state.map(task => {
//     //   if (task.id !== action.payload) {
//     //     return task;
//     //   }
//     //   return {
//     //     ...task,
//     //     completed: !task.completed,
//     //   };
//     // });
//     // ✅ Immer will replace this with an update operation
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//       }
//     }
//   },
// });

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     // return {
//     //   ...state,
//     //   status: action.payload,
//     // };
//     // ✅ Immer will replace this with an update operation
//     state.status = action.payload;
//   },
// });

// // export const tasksReducer = (state = tasksInitialState, action) => {
// //   switch (action.type) {
// //     case addTask.type:
// //       return [...state, action.payload];
// //     case deleteTask.type:
// //       return state.filter(task => task.id !== action.payload);
// //     case 'tasks/toggleCompleted':
// //       return state.map(task => {
// //         if (task.id !== action.payload) {
// //           return task;
// //         }
// //         return { ...task, completed: !task.completed };
// //       });
// //     default:
// //       return state;
// //   }
// // };

// //=============== JUST REDUX ========================

// /*
// // Always one root reduces in the app, which must be passed
// // to create the store
// // Use initialState as default state value
// const tasksReducer = (state = tasksInitialState, action) => {
//   // The reducer distinguishes between actions by the value of the type property
//   switch (action.type) {
//     // Depending on the type of action, different logic will be executed
//     case 'tasks/addTask':
//       // Need to return a new state object:
//       // which has all the data of the existing state
//       // and a new task object
//       return [...state, action.payload];

//     case 'tasks/deleteTask':
//       return state.filter(task => task.id !== action.payload);

//     case 'tasks/toggleCompleted':
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       });
//     default:
//       // Each reducer receives all actions sent to the store.
//       // If the reducer should not process some type of action,
//       // must return the existing state unchanged.
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// // Only gets the filters property updated
// // Now the value of the state parameter will be the filters object
// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // The code for the tasksReducer and filtersReducer reducers
// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
// */
