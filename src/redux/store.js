/*
STORE - contains complete app state
        - state access methods
        - action dispatch methods
*/
import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { filtersReducer, rootReducer, tasksReducer } from './reducer.js';
import { configureStore } from '@reduxjs/toolkit';

//=============== REDUX TOOLKIT ========================
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

//=============== JUST REDUX ========================
// Create a store extension to add developer tools
// const enhancer = devToolsEnhancer();
// Create store
// export const store = createStore(rootReducer, enhancer);
