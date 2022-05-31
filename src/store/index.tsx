import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducer';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
