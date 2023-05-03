// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: 'Active',
//     numberOfClicked: 0,
//   },
// };

import { combineReducers } from '@reduxjs/toolkit';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const filtersInitialState = {
  status: 'Active',
  numberOfClicked: 0,
};

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filter/setStatusFilter':
      return {
        // ...state,
        // filters: {
        //   ...state.filters,
        //   status: action.payload,
        // },
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

// From actions.js: //type :filter/setStatusFilter
// export const rootReducer = (state = {}, action) => {
//   return {
//     tasks: taskReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };
//or:
export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
