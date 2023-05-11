//GATHERING DATA AND INFORMATION
// GLABOALIZED STATE

import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { rootReducer } from './reducer.js';

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
