//GATHERING DATA AND INFORMATION

import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { rootReducer } from './reducer.js';

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
