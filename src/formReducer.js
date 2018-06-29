
/*jshint esversion: 6*/
// Importing the necessary action's types:
import {
  UPDATE_COMMENT,
  EDIT_COMMENT
} from './actions';
import comments from './comments.js'
// Creating a reducer for administrating form's state

export default function formReducer (state = {id: "", text: ""}, action) {
    switch(action.type) {
    case UPDATE_COMMENT:
    return {
      id: action.id,
      text: action.text
    }
    default:
        return state;
    }
}
