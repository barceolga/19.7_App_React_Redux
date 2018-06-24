
/*jshint esversion: 6*/
//Importing small reducers from other files and importing an auxiliar funtion comineReducers for combing small reducers into main reducer

import {combineReducers} from 'redux';
import comments from './comments.js';
import users from './users.js';

// Main Reducer

const reducer = combineReducers({
  comments,
  users
});

export default reducer;
