import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore
} from 'redux-persist';
import { watcherSaga } from './Saga/rootSaga';
import userReducer from './Dux/UserDux';
import uiDux from './Dux/uiDux';

const reducer = combineReducers({
  user: userReducer,
  ui: uiDux
});

export type RootState = ReturnType<typeof reducer>;

const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
    sagaMiddleware
  ]
});
export const persistor = persistStore(store);

sagaMiddleware.run(watcherSaga);

export default store;
