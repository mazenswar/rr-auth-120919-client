import { combineReducers } from 'redux';
import userReducer from './userReducer';
import dogsReducer from './dogsReducer';

const state = {
  user: userReducer,
  dogs: dogsReducer
};

export default combineReducers(state);
