import logger from 'redux-logger';
import rootReducer from '../reducer';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, legacy_createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware, logger),
);
export const persistor = persistStore(store);
