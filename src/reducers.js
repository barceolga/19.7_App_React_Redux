
/*jshint esversion: 6*/
//Importing small reducers from other files and importing an auxiliar funtion comineReducers for combing small reducers into main reducer

import {combineReducers} from 'redux';
import comments from './comments.js';
import  formReducer from './formReducer.js';
import users from './users.js';

// Main Reducer

const rootReducer = combineReducers({
  form: formReducer,
  users,
  comments
})

export default rootReducer;
