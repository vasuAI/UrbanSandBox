import {combineReducers} from 'redux';
import authReducer from './authReducer';
import childReducer from './childReducer';
const rootReducer = combineReducers({
  authReducer,
  childReducer,
});

export default rootReducer;
