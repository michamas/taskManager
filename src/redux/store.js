// COMPLETE APPLICATOON STATE
// STATE ACCESS METHODS
// ACTION DISPATCH METHODS

import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { rootReducer } from './reducer.js';

// Create a store extension to add developer tools
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
