
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
          return  [{
                  id: action.id,
                  text: action.text,
                  votes: 0
                  }
                  , ...state];

    case REMOVE_COMMENT:
        return  state.filter(comment => comment.id !== action.id);

    case EDIT_COMMENT:
        /*let filteredComments = state.filter(comment => comment.id !== action.id);*/
        const editedComment = state.find(comment=> comment.id === action.id);
        return [...state, editedComment];

    case THUMB_UP_COMMENT:
    const upvotedComments = state.map(comment => {
        if(comment.id === action.id) {
         return {...comment, votes: comment.votes +1};
        }
          return comment;
    });
    return upvotedComments;

    case THUMB_DOWN_COMMENT:
        const downvotedComments = state.map(comment => {
            if(comment.id === action.id) {
             return {...comment, votes: comment.votes -1};
            }
              return comment;
        });
        return downvotedComments;

    default:
        return state;
    }
}
