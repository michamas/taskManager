/*
STORE - contains complete app state
        - state access methods
        - action dispatch methods
*/

import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice.js';
import { filtersReducer } from './filtersSlice.js';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { authReducer } from './auth/slice.js';
import persistStore from 'redux-persist/es/persistStore';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const middleware = {
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// };

//=============== REDUX TOOLKIT + REDUX PERSIST ========================
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    tasks: tasksReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

//=============== JUST REDUX ========================
// Create a store extension to add developer tools
// const enhancer = devToolsEnhancer();
// Create store
// export const store = createStore(rootReducer, enhancer);
