
/*jshint esversion: 6*/
// Importing the necessary action's types:
import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT
} from './actions';

// Creating a reducer for administrating comments' state

export default function comments (state = [], action) {

    switch(action.type) {
      case ADD_COMMENT:
              if (action.text!=="") {
                return  [{
                      id: action.id,
                      text: action.text,
                      positive: 0,
                      negative: 0,
                      votes:0
                      }
                      , ...state];
              }

    case REMOVE_COMMENT:
              return  state.filter(comment => comment.id !== action.id);

    case EDIT_COMMENT:
             const editedComments = state.map(comment => {
                 if( comment.id===action.id && comment.text !== action.text && action.text!=="") {
                 return {...comment, text: action.text};
                 }
                 return comment;
             });
             return editedComments;
    case THUMB_UP_COMMENT:
              const upvotedComments = state.map(comment => {
                  if(comment.id === action.id) {
                   return {...comment, positive: comment.positive +1, votes: comment.votes +1};
                  }
                    return comment;
              });
              return upvotedComments;

    case THUMB_DOWN_COMMENT:
              const downvotedComments = state.map(comment => {
                  if(comment.id === action.id) {
                   return {...comment, negative: comment.negative -1, votes: comment.votes -1};
                  }
                    return comment;
              });
              return downvotedComments;

    default:
        return state;
    }
}
