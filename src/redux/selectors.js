import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants.js';

// Atomic (simple) selectors
// - they render whenever a part of state changes
export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectStatusFilter = state => state.filters.status;

// Composite (compound) selectors
// - they render whenever state changes, at all time

export const selectVisibleTasks = state => {
  // let's use the other selectors
  const statusFilter = selectStatusFilter(state);
  const tasks = selectTasks(state);

  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

// export const selectTaskCountOld = state => {
//   const tasks = selectTasks(state);

//   return tasks.reduce(
//     (acc, task) => {
//       if (task.completed) {
//         acc.completed += 1;
//       } else {
//         acc.active += 1;
//       }
//       return acc;
//     },
//     { active: 0, completed: 0 }
//   );
// };

//function is used to memoize the selector, which takes an array
// of selectors whose values are needed for the following subsequent calculations
export const selectTaskCount = createSelector(
  // array of input selectors
  [selectTasks],
  // transducer function
  tasks => {
    console.log('selectTaskCount NEW ONE');
    return tasks.reduce(
      (acc, task) => {
        if (task.completed) {
          acc.completed += 1;
        } else {
          acc.active += 1;
        }
        return acc;
      },
      { active: 0, completed: 0 }
    );
  }
);

// export const selectVisibleTasks = createSelector(
//     [selectTasks, selectStatusFilter],
//     (tasks, statusFilter) => {
//       console.log("Calculating visible tasks. Now memoized!");
//       switch (statusFilter) {
//         case statusFilters.active:
//           return tasks.filter(task => !task.completed);
//         case statusFilters.completed:
//           return tasks.filter(task => task.completed);
//         default:
//           return tasks;
//       }
//     }
